/**
 * Convert the date from 2024-08-17T04:01:00Z to "weekday, day month year"
 * @param rawPublishDate: string - the raw date string in the form 2024-08-17T04:01:00Z
 * @returns string - the formatted date string in the form "weekday, day month year"
 */
export const getArticlePublishDate = (rawPublishDate: string): string => {
  return new Date(rawPublishDate)
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
};

/**
 * Get the current date in the form "yyyy-mm-dd"
 * @returns string - the formatted date string in the form "2024-08-17"
 */
export const getCurrentDate = (): string => {
  return new Date().toISOString().split("T")[0];
};

/**
 * Get the date in the form "yyyy-mm-dd" from N days ago
 * @returns string - the formatted date string in the form "2024-08-17"
 */
export const getDateNDaysAgo = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  const year: number = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day: string = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Get random values from an array
 * @param arr: T[] - the array to get random values from
 * @param count: number - the number of random values to get
 * @returns string - the formatted date string in the form "2024-08-17"
 */
export const getRandomValuesFromAnArray = <T>(arr: T[], count: number): T[] => {
  const shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.slice(0, count);
};
