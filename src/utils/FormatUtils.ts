import { format } from "date-fns";

function formatDate(value: Date): string {
  return format(value, "yyyy-MM-dd");
}

function formatDateDots(value: Date): string {
  return format(value, "yyyy.MM.dd");
}

export { formatDate, formatDateDots };
