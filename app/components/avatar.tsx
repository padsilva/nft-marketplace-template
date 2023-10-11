export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "medium" | "big";
}) {
  const pxs = size === "big" ? 120 : size === "medium" ? 60 : 24;
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
