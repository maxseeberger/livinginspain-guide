interface SummaryBoxProps {
  children: React.ReactNode;
}

export default function SummaryBox({ children }: SummaryBoxProps) {
  return (
    <div className="not-prose border-l-[3px] border-terra bg-terra-bg px-6 py-5 my-8 rounded-r-xl">
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-terra mb-2">In short</p>
      <div className="text-text-md text-[0.9375rem] leading-relaxed [&>p]:mb-0 [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}
