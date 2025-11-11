/**
 * @source https://stackoverflow.com/questions/51425067/flatpickr-adding-dropdown-to-change-year
 */

import { formatDate } from '~/modules/user/shared/utils/date';

type PluginConfig = {
    text?: string;
    theme?: string;
    date: string;
    yearStart: number;
    yearEnd: number;
};

const yearDropdownPlugin = function (config: PluginConfig) {
    const defaultConfig = {
        text: '',
        theme: 'light',
        date: formatDate(new Date()),
        yearStart: 100,
        yearEnd: 2,
    };

    const actualConfig: PluginConfig = {
        ...defaultConfig,
        ...config,
    };

    const getYear = function (value: string) {
        const date = value.split('/');
        return date[2];
    };

    const currYear = new Date().getFullYear();
    const selectedYear = getYear(actualConfig.date);

    const yearDropdown = document.createElement('select');

    const createSelectElement = function (year: string) {
        const start = new Date().getFullYear() - config.yearStart;
        const end = currYear + config.yearEnd;

        for (let i = end; i >= start; i--) {
            const option = document.createElement('option');
            option.value = String(i);
            option.text = String(i);
            yearDropdown.appendChild(option);
        }
        yearDropdown.value = year;
    };

    return function (fp: any) {
        fp.yearSelectContainer = fp._createElement(
            'div',
            'flatpickr-year-select ' + config.theme + 'Theme',
            config.text
        );

        fp.yearSelectContainer.tabIndex = -1;
        createSelectElement(selectedYear);
        yearDropdown.addEventListener('change', function (evt) {
            const target = evt.target as HTMLSelectElement;
            const year = target.options[target.selectedIndex].value;
            fp.changeYear(year);
        });

        fp.yearSelectContainer.append(yearDropdown);

        return {
            onReady: function onReady() {
                const name = fp.monthNav.className;
                const yearInputCollection = fp.calendarContainer.getElementsByClassName(name);
                const el = yearInputCollection[0];
                el.parentNode.insertBefore(fp.yearSelectContainer, el.parentNode.firstChild);
            },
        };
    };
};

export default yearDropdownPlugin;
