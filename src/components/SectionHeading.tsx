type Props = {
  id: string;
  index: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  index,
  title,
  description,
}: Props) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
        <span className="text-accent">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span>{`// ${title.toLowerCase()}`}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
