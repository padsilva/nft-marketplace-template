export function Typography({
  capitalizeText,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  text,
  textColor,
  variant = "body",
}: {
  capitalizeText?: boolean;
  fontFamily?: "spacemono" | "worksans";
  fontSize?: "base" | "colon" | "2xl" | "24px";
  fontWeight?: "normal" | "semibold" | "bold";
  lineHeight?: "loose" | "normal" | "relaxed" | "snug" | "tight";
  text: string | number;
  textColor?: "primary" | "secondary" | "tertiary" | "black";
  variant?: "body" | "caption" | "h1" | "h2" | "h3" | "h4";
}) {
  const fontFamilies = {
    worksans: "font-worksans",
    spacemono: "font-spacemono",
  };

  const fontSizes = {
    colon: "text-colon",
    base: "text-base",
    "2xl": "text-2xl",
    "24px": "text-[24px]",
  };

  const fontWeights = {
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const lineHeights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    snug: "leading-snug",
    tight: "leading-tight",
    loose: "leading-loose",
  };

  const textColors = {
    primary: "text-white",
    secondary: "text-[#858584]",
    tertiary: "text-[#CCCCCC]",
    black: "text-black",
  };

  switch (variant) {
    case "caption":
      return (
        <span
          className={`${
            fontFamilies[fontFamily ?? "worksans"]
          } text-xs/normal ${textColors[textColor ?? "primary"]}`}
        >
          {text}
        </span>
      );

    case "h1":
      return (
        <h1
          className={`${
            fontFamilies[fontFamily ?? "worksans"]
          } text-7xl capitalize`}
        >
          {text}
        </h1>
      );

    case "h2":
      return (
        <h2
          className={`${
            fontFamilies[fontFamily ?? "worksans"]
          } text-5xl capitalize font-semibold`}
        >
          {text}
        </h2>
      );

    case "h3":
      return (
        <div
          className={`${
            fontFamilies[fontFamily ?? "worksans"]
          } text-4xl capitalize leading-tight font-${fontWeight ?? "semibold"}`}
        >
          {text}
        </div>
      );

    case "h4":
      return (
        <div
          className={`${
            fontFamilies[fontFamily ?? "worksans"]
          } text-3xl capitalize`}
        >
          {text}
        </div>
      );

    default:
      return (
        <p
          className={`${fontFamilies[fontFamily ?? "worksans"]} ${
            fontSizes[fontSize ?? "base"]
          } ${lineHeights[lineHeight ?? "snug"]} ${
            textColors[textColor ?? "primary"]
          } ${fontWeights[fontWeight ?? "normal"]}${
            capitalizeText ? " capitalize" : ""
          }`}
        >
          {text}
        </p>
      );
  }
}
