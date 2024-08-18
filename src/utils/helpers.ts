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
