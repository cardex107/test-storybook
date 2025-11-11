import { format as fnsFormat, addWeeks, addMonths, lastDayOfMonth } from 'date-fns';

export const formatDateFromString = (date: string, format: string = 'yyyy/MM/dd'): string => {
    if (!date) {
        return '';
    }

    return fnsFormat(new Date(date), format);
};

export const formatDate = (date: Date, format: string = 'PP'): string => {
    if (!date) {
        return '';
    }

    return fnsFormat(date, format);
};

export const getDateRangeFromDate = (date: Date, weeks: number): { startDate: string; endDate: string } => {
    const today = new Date();
    const startDate = today <= date ? today : date;
    const endDate = addWeeks(today, weeks);

    return {
        startDate: formatDate(startDate, 'yyyy-MM-dd'),
        endDate: formatDate(endDate, 'yyyy-MM-dd'),
    };
};

/**
 * @param {Date} date - The start date of the range.
 * @param {number} months - The months count from date parameter.
 * If months === 1 it just calculates from date to the end of the month.
 */
export const getCalendarMonthsDateRange = (date: Date, months: number): { startDate: string; endDate: string } => {
    const today = new Date();
    const startDate = today <= date ? today : date;
    if (months === 0) {
        return {
            startDate: formatDate(startDate, 'yyyy-MM-dd'),
            endDate: formatDate(lastDayOfMonth(startDate), 'yyyy-MM-dd'),
        };
    }
    const endDate = addMonths(today, months);
    return {
        startDate: formatDate(startDate, 'yyyy-MM-dd'),
        endDate: formatDate(endDate, 'yyyy-MM-dd'),
    };
};
