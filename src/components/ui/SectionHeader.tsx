interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-(--title-color)">
        {title}
      </h2>
      <span className="block text-center text-sm mb-12 text-(--text-color)">
        {subtitle}
      </span>
    </>
  );
}
