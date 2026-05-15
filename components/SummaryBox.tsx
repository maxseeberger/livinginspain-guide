interface SummaryBoxProps {
  children: React.ReactNode;
}

export default function SummaryBox({ children }: SummaryBoxProps) {
  return (
    <div className="border-l-4 border-navy bg-cream px-6 py-5 my-8 rounded-r-md">
      <p className="text-xs font-semibold uppercase tracking-widest text-navy mb-2">In short</p>
      <div className="text-text text-[0.975rem] leading-relaxed [&>p]:mb-0">{children}</div>
    </div>
  );
}
