import { Menu } from '~/modules/amos-api/types';

export default [
    {
        project_id: 1,
        group_id: 1,
        order: 1,
        locales: [
            {
                locale: 'en-UK',
                name: 'General Medicine',
            },
        ],
        items: [
            {
                type: 'service',
                service: 'omc|general',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'General Practitioner',
                    },
                ],
            },
            {
                type: 'service',
                service: 'omc|new-specialty',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Ginecological',
                    },
                ],
            },
            {
                type: 'service',
                service: 'scope|scope_key_1',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Scope',
                    },
                ],
            },
            {
                type: 'service',
                service: 'scope|scope_key_2',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Scope2',
                    },
                ],
            },
        ],
    },
    {
        project_id: 1,
        group_id: 2,
        order: 2,
        locales: [
            {
                locale: 'en-UK',
                name: 'Group 2',
            },
        ],
        items: [
            {
                type: 'service',
                service: 'emo',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Second Opinion',
                    },
                ],
            },
        ],
    },
    {
        project_id: 1,
        group_id: 3,
        order: 3,
        locales: [
            {
                locale: 'en-UK',
                name: 'Group 3',
            },
        ],
        items: [
            {
                type: 'page',
                slug: 'page1',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Page 1',
                    },
                ],
            },
            {
                type: 'link',
                hidden: false,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'External url',
                        link_url: 'https://www.someurl.com',
                    },
                ],
            },
            {
                type: 'page',
                slug: 'page2',
                hidden: true,
                accessible_only_logged: false,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Page 2',
                    },
                ],
            },
        ],
    },
    {
        project_id: 1,
        group_id: 4,
        order: 4,
        locales: [
            {
                locale: 'en-UK',
                name: 'Group 4',
            },
        ],
        items: [
            {
                type: 'link',
                hidden: false,
                accessible_only_logged: true,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Webinar 1',
                        link_url: 'https://www.webinar1.com',
                    },
                ],
            },
            {
                type: 'link',
                hidden: false,
                accessible_only_logged: true,
                locales: [
                    {
                        locale: 'en-UK',
                        name: 'Webinar 2',
                        link_url: 'https://www.webinar2.com',
                    },
                ],
            },
        ],
    },
] as Menu;
