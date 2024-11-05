export const formatDateToIndonesian = (date: string): string => {
  const newDate = new Date(date);

  const day = String(newDate.getDate()).padStart(2, '0');     // DD
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // MM (months are 0-indexed)
  const year = newDate.getFullYear();                           // YYYY

  const hours = String(newDate.getHours()).padStart(2, '0');   // hh
  const minutes = String(newDate.getMinutes()).padStart(2, '0'); // mm
  const seconds = String(newDate.getSeconds()).padStart(2, '0'); // ss

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};