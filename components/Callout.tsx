type CalloutVariant = 'warning' | 'tip' | 'info';

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const styles: Record<CalloutVariant, { border: string; bg: string; dot: string; titleColor: string; defaultTitle: string }> = {
  warning: { border: 'border-amber-400', bg: 'bg-amber-50', dot: 'bg-amber-400', titleColor: 'text-amber-800', defaultTitle: 'Important' },
  tip:     { border: 'border-emerald-400', bg: 'bg-emerald-50', dot: 'bg-emerald-500', titleColor: 'text-emerald-800', defaultTitle: 'Tip' },
  info:    { border: 'border-navy/30', bg: 'bg-sand', dot: 'bg-navy', titleColor: 'text-navy', defaultTitle: 'Note' },
};

export default function Callout({ variant = 'info', title, children }: CalloutProps) {
  const s = styles[variant];
  return (
    <div className={`not-prose border-l-[3px] ${s.border} ${s.bg} px-5 py-4 my-6 rounded-r-xl`}>
      <p className={`font-display font-semibold text-sm mb-2 flex items-center gap-2 ${s.titleColor}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot} shrink-0`} />
        {title || s.defaultTitle}
      </p>
      <div className="text-text-md text-[0.9375rem] leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&_a]:text-terra [&_a]:underline [&_a:hover]:text-terra-lt [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}
