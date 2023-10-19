export function Button({
  label,
  href,
  type = "primary",
  size = "medium",
  variant = "filled",
  Icon,
  smallPadding = false,
}: {
  label: string;
  href: string;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
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
      : size === "large"
      ? "h-[72px]"
      : size === "small"
      ? "h-[46px]"
      : "h-[60px]";
  const bgColor =
    type === "secondary"
      ? "bg-[#FFFFFF]"
      : variant === "filled"
      ? "bg-[#A259FF]"
      : "";
  const border = variant === "outlined" ? "border-2 border-[#A259FF]" : "";
  const iconColor =
    variant === "outlined" || type === "secondary" ? "text-[#A259FF]" : "";
  const textColor = type === "secondary" ? "text-black" : "";
  return (
    <a href={href}>
      <div
        className={`flex items-center gap-3 ${paddingX} font-semibold ${height} rounded-[20px] ${border} ${bgColor} ${textColor}`}
      >
        {Icon && <Icon size={20} className={iconColor} />}
        {label}
      </div>
    </a>
  );
}
