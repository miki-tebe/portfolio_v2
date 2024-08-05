import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Entry } from "@keystatic/core/reader";

import keystaticConfig from "keystatic.config";

type WorkEntry = Entry<(typeof keystaticConfig)["collections"]["work"]>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(
  startDate: Date,
  endDate?: WorkEntry["dateEnd"]
): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate?.discriminant === true) {
    return `${startMonth} ${startYear} - Current`;
  } else if (endDate?.discriminant === false && endDate.value) {
    endMonth = (endDate.value as unknown as Date).toLocaleString("default", {
      month: "short",
    });
    endYear = (endDate.value as unknown as Date).getFullYear().toString();
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}
