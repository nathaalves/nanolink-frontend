export function isoDateToLocalDate(date: Date): string {
  const splitedDate = `${date}`.split('T')[0];
  const [year, month, day] = splitedDate.split('-');
  return `${day}/${month}/${year}`;
}
