import * as sass from 'sass';
import fs from 'node:fs';
import path from 'node:path';
import { Plugin, ViteDevServer } from 'vite';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

type RootSCSSFile = {
    input: string;
    output: string;
};

type Config = {
    files: RootSCSSFile[];
    sourceMap: boolean;
};

const compileSCSS = async (
    input: string,
    output: string,
    {
        sourceMap,
        onCompiled,
        onSourceMapCompiled,
        onError,
    }: {
        sourceMap: boolean;
        onCompiled: (file: string) => void;
        onSourceMapCompiled: (file: string) => void;
        onError: (error: NodeJS.ErrnoException) => void;
    }
) => {
    const result = sass.compile(input, {
        sourceMap,
        sourceMapIncludeSources: true,
        style: process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed',
    });

    const postResult = await postcss([autoprefixer]).process(
        result.css,
        sourceMap
            ? {
                  from: undefined,
                  map: {
                      prev: JSON.stringify(result.sourceMap),
                      inline: false,
                      annotation: true,
                  },
              }
            : { from: undefined }
    );

    const outputDir = path.dirname(path.resolve(output));

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        fs.writeFileSync(output, postResult.css);
    } catch (error: any) {
        onError(error);
        return;
    }

    onCompiled(output);

    if (result.sourceMap) {
        const sourceMapFilename = `${output}.map`;
        try {
            const sourceMapComment = `/*# sourceMappingURL=${sourceMapFilename.replace('./public', '')} */`;
            fs.writeFileSync(sourceMapFilename, postResult.map.toString());
            fs.appendFileSync(output, `\n${sourceMapComment}`);
        } catch (error: any) {
            onError(error);
            return;
        }
        onSourceMapCompiled(sourceMapFilename);
    }
};

export default function cssCompilerPlugin(config: Config): Plugin<any> {
    const pluginName = 'scss-compiler-plugin';
    let _server: ViteDevServer;
    const { files, sourceMap } = config;

    return {
        name: pluginName,
        configureServer: (server: ViteDevServer) => {
            _server = server;
        },
        handleHotUpdate: ({ server, file }) => {
            if (file.includes('styles.css')) {
                server.ws.send({
                    type: 'full-reload',
                });
            }
        },
        watchChange: async (id: string) => {
            //@ts-expect-error internal value
            if (global.__scssCompilerPluginIsCompiling) {
                return;
            }

            if (!id.endsWith('.scss')) {
                return;
            }

            //@ts-expect-error internal value
            global.__scssCompilerPluginIsCompiling = true;

            for (const rootFile of files) {
                const rootDir = path.dirname(path.resolve(rootFile.input));
                const fileDir = path.dirname(id);

                if (fileDir.includes(rootDir)) {
                    await compileSCSS(path.resolve(rootFile.input), rootFile.output, {
                        sourceMap,
                        onCompiled: (output: string) => {
                            _server.config.logger.info(`SCSS compliled to ${output}`);
                        },
                        onSourceMapCompiled: (output: string) =>
                            _server.config.logger.info(`SCSS source map compliled to ${output}`),
                        onError: (error: NodeJS.ErrnoException) => _server.config.logger.error(error.message),
                    });
                }
            }

            //@ts-expect-error internal value
            global.__scssCompilerPluginIsCompiling = false;
        },
        buildStart: async () => {
            //@ts-expect-error internal value
            if (global.__scssCompilerPluginIsCompiling) {
                return;
            }

            //@ts-expect-error internal value
            global.__scssCompilerPluginIsCompiling = true;

            for (const file of files) {
                await compileSCSS(file.input, file.output, {
                    sourceMap,
                    onCompiled: (output: string) => _server?.config.logger.info(output + '\n'),
                    onSourceMapCompiled: (output: string) => _server?.config.logger.info(output),
                    onError: (error: NodeJS.ErrnoException) => _server?.config.logger.error(error.message),
                });
            }

            setTimeout(() => {
                //@ts-expect-error internal value
                global.__scssCompilerPluginIsCompiling = false;
            }, 1000);
        },
    };
}
