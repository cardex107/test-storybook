import useProject from '~/modules/user/shared/hooks/useProject';
import templates, { TemplateConfiguration } from '../config/templates';
import { getTemplate } from '~/shared/application/project';

const defaultTemplateConfiguration: TemplateConfiguration = {
    hiddenProfileMenuItems: [],
    useExtraInfoHomeBlocks: true,
};

const useTemplateConfiguration = () => {
    const project = useProject();
    const template = getTemplate(project);

    return {
        ...defaultTemplateConfiguration,
        ...(templates[template.name] ?? {}),
    };
};

export default useTemplateConfiguration;
