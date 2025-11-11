import { addDays } from 'date-fns';
import { range } from 'lodash';
import { formatDate } from '../utils/date';

const daySlots = range(24).map((hour) => ({
    time_ini: `${hour < 10 ? '0' : ''}${hour}:00`,
    time_end: `${hour < 10 ? '0' : ''}${hour}:30`,
    availability: true,
}));

const buildAvailabilities = () => {
    const dayCount = 8;
    const startDate = new Date();

    let currentDate;
    return range(dayCount).map((i) => {
        currentDate = addDays(startDate, i);
        return {
            date: formatDate(currentDate, 'yyyy-MM-dd'),
            day_slots: [...daySlots],
        };
    });
};

export const availabilities = buildAvailabilities();
