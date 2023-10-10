export function Button({
  label,
  href,
  type = "primary",
  variant = "filled",
  Icon,
  smallPadding = false,
}: {
  label: string;
  href: string;
  type?: "primary" | "secondary" | "tertiary";
  variant?: "filled" | "outlined" | "text";
  Icon?: React.ElementType;
  smallPadding?: boolean;
}) {
  const paddingX = smallPadding
    ? "px-[30px]"
    : variant === "text"
    ? "px-[20px]"
    : "px-[50px]";
  const height =
    variant === "text"
      ? ""
      : type === "primary"
      ? "h-[72px]"
      : type === "secondary"
      ? "h-[60px]"
      : "h-[46px]";
  const bgColor = variant === "filled" ? "bg-[#A259FF]" : "";
  const border = variant === "outlined" ? "border-2 border-[#A259FF]" : "";
  const iconColor = variant === "outlined" ? "text-[#A259FF]" : "";
  return (
    <a href={href}>
      <div
        className={`flex items-center gap-3 ${paddingX} font-semibold ${height} rounded-[20px] ${border} ${bgColor}`}
      >
        {Icon && <Icon size={20} className={iconColor} />}
        {label}
      </div>
    </a>
  );
}
