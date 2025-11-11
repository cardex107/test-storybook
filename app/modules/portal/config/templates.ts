export type TemplateConfiguration = {
    hiddenProfileMenuItems?: string[];
    visibleProfileMenuItems?: string[];
    useExtraInfoHomeBlocks?: boolean;
};

const configurations: Record<string, TemplateConfiguration> = {
    'nueva-mutua-sanitaria': {
        visibleProfileMenuItems: ['personal-details', 'dependents'],
    },
    'axa-spain': {
        hiddenProfileMenuItems: ['medical-history', 'postal-data', 'dependents'],
    },
    'montepio-girona': {
        hiddenProfileMenuItems: ['dependents'],
    },
};

export default configurations;
