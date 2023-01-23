import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function formatDate(ISOdate: string): string {
  const dateTime = new Date(ISOdate);
  const currTime = new Date();
  const diffTime = currTime.getTime() - dateTime.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 7
    ? dateTime.toLocaleDateString("ja-JP", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : formatDistanceToNowStrict(dateTime, {
        addSuffix: true,
      });
}
