import useProject from '~/modules/user/shared/hooks/useProject';
import useMenu from './useMenu';
import { useTranslation } from 'react-i18next';
import useTemplateConfiguration from './useTemplateConfiguration';

type Blocks = Map<
    number,
    {
        contextId: number;
        title: string;
        content: string;
        image: string;
        links: { text: string; link: string; disabled?: boolean }[];
    }
>;

const getContextIdsFromProjectImageResources = (images: Record<string, string>) => {
    const contextIds = [];
    for (const key in images) {
        const imageKey = key;
        const contextId = imageKey.startsWith('context') ? imageKey.replace('context', '') : null;

        if (images[key] && contextId !== null && !isNaN(parseInt(contextId))) {
            contextIds.push(parseInt(contextId));
        }
    }
    return contextIds;
};

const useHomeBlocks = () => {
    const { t } = useTranslation();
    const project = useProject();
    const menu = useMenu();
    const templateConfiguration = useTemplateConfiguration();

    const getContentBlocks = () => {
        const blocks: Blocks = new Map();

        let contextId = 0;
        let index = 0;

        for (const group of menu) {
            index++;
            contextId = group.contextId ?? index;

            if (blocks.has(contextId)) {
                contextId += 1;
            }

            const image = project.resources.images[`context${contextId}`];
            let blockTitle = t(`context.${contextId}.name`);
            let links: { text: string; link: string }[] = [];

            if (group.items) {
                links = group.items.map((item) => ({
                    text: item.name,
                    link: item.link,
                }));
                blockTitle = group.name || blockTitle;
            }

            if ('link' in group) {
                links = [
                    {
                        text: t(`context.${contextId}.button`),
                        link: group.link,
                    },
                ];
                blockTitle = group.name || blockTitle;
            }

            blocks.set(contextId, {
                contextId,
                title: blockTitle,
                content: '<p>' + t(`context.${contextId}.description`) + '</p>',
                image: image,
                links: links,
            });
        }

        if (templateConfiguration.useExtraInfoHomeBlocks) {
            const contextIds = getContextIdsFromProjectImageResources(project.resources.images);

            for (const id of contextIds) {
                if (!blocks.has(id) && id > 3 && t('context.' + id + '.name')) {
                    blocks.set(id, {
                        contextId: id,
                        title: t('context.' + id + '.name'),
                        content: '<p>' + t(`context.${id}.description`) + '</p>',
                        image: project.resources.images[`context${id}`],
                        links: [],
                    });
                }
            }
        }

        return Array.from(blocks.values());
    };

    return getContentBlocks;
};

export default useHomeBlocks;
