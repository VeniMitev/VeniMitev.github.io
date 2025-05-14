export function getStartDate(subTitle: string): string | undefined {
  const match = subTitle.match(/(\w+)?\.?\s*(\d{4})/);
  if (!match) return undefined;

  const [_, monthStr, yearStr] = match;

  // If a month is present, convert to MM format
  if (monthStr) {
    const month = getMonthNumber(monthStr);
    if (month) return `${yearStr}-${month}`;
  }

  return yearStr;
}

export function getMonthNumber(month: string): string | undefined {
  const months: { [key: string]: string } = {
    jan: '01', january: '01',
    feb: '02', february: '02',
    mar: '03', march: '03',
    apr: '04', april: '04',
    may: '05',
    jun: '06', june: '06',
    jul: '07', july: '07',
    aug: '08', august: '08',
    sep: '09', sept: '09', september: '09',
    oct: '10', october: '10',
    nov: '11', november: '11',
    dec: '12', december: '12'
  };

  return months[month.toLowerCase()];
}