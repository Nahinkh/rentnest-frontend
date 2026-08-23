export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(
    "en-BD",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
};

export const RequestDate = ({
  date,
}: {
  date: string;
}) => {
  return (
    <span className="text-[11px] text-muted-foreground">
      {formatDate(date)}
    </span>
  );
};