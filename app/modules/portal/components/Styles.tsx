import { Project } from '~/modules/amos-api/types';
import { getTemplate, resolveCSSVariables } from '~/shared/application/project';

interface StylesProps {
    project?: Project;
    hideScroll?: boolean;
}

export default function Styles({ project, hideScroll }: StylesProps) {
    const varaiblesCSS = resolveCSSVariables(project);
    const styles = getTemplate(project).styles;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: varaiblesCSS }} />
            <link rel="stylesheet" type="text/css" href={`/css/${styles}/styles.css`} />
            {hideScroll && <style dangerouslySetInnerHTML={{ __html: `overflow-y: hidden` }} />}
        </>
    );
}
