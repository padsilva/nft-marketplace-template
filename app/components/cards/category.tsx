export function CategoryCard({
  name,
  Icon,
}: {
  name: string;
  Icon?: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-center bg-[#3B3B3B] rounded-[20px] w-60">
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-60 flex flex-col items-center justify-center rounded-t-[20px]"
        style={{
          backgroundImage: `url('/assets/${name}.png')`,
        }}
      >
        <div className="backdrop-blur-lg bg-[#ffffff1a] w-full h-full rounded-t-[20px]" />
        {Icon && <Icon className="absolute" />}
      </div>

      <div className="flex flex-col w-full pt-5 px-[30px] pb-[25px] rounded-b-[20px] bg-[#3B3B3B] gap-2.5">
        <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
      </div>
    </div>
  );
}
