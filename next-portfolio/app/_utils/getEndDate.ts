import { getMonthNumber } from './getStartDate';

export function getEndDate(subTitle: string): string | undefined {
    const match = subTitle.match(/[-–]\s*(\w+)?\.?\s*(\d{4}|Present)/i);
    if (!match) return undefined;

    const [_, monthStr, yearStr] = match;

    if (!yearStr || yearStr.toLowerCase() === 'present') return undefined;

    if (monthStr) {
        const month = getMonthNumber(monthStr);
        if (month) return `${yearStr}-${month}`;
    }

    return yearStr;
}
