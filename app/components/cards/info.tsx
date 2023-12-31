import { Typography } from "../typography";

export function InfoCard({
  description,
  Icon,
  title,
}: {
  description: string;
  Icon?: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-5 bg-[#3B3B3B] rounded-[20px] pt-2.5 px-[30px] pb-[30px]">
      {Icon && <Icon />}
      <div className="flex flex-col items-center gap-2.5 text-center">
        <Typography
          text={title}
          fontSize="2xl"
          fontWeight="semibold"
          capitalizeText
        />
        <Typography text={description} />
      </div>
    </div>
  );
}
