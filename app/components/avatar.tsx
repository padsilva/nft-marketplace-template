export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "medium" | "large";
}) {
  const pxs = size === "large" ? 120 : size === "medium" ? 60 : 24;
  return (
    <img
      src={`/assets/${name}.png`}
      alt={`${name} avatar`}
      className="rounded-full"
      width={pxs}
      height={pxs}
    />
  );
}
