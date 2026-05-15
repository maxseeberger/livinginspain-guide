type CalloutVariant = 'warning' | 'tip' | 'info';

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const styles: Record<CalloutVariant, { border: string; bg: string; dot: string; titleColor: string; label: string }> = {
  warning: {
    border: 'border-amber-300',
    bg: 'bg-amber-50',
    dot: 'bg-amber-400',
    titleColor: 'text-amber-800',
    label: 'Important',
  },
  tip: {
    border: 'border-emerald-300',
    bg: 'bg-emerald-50',
    dot: 'bg-emerald-500',
    titleColor: 'text-emerald-800',
    label: 'Tip',
  },
  info: {
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    dot: 'bg-blue-400',
    titleColor: 'text-blue-800',
    label: 'Note',
  },
};

export default function Callout({ variant = 'info', title, children }: CalloutProps) {
  const s = styles[variant];
  return (
    <div className={`border-l-[3px] ${s.border} ${s.bg} px-5 py-4 my-6 rounded-r-xl not-prose`}>
      <p className={`font-semibold text-sm mb-1.5 flex items-center gap-2 ${s.titleColor}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot} inline-block shrink-0`} />
        {title || s.label}
      </p>
      <div className="text-text-md text-[0.9375rem] leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&_a]:text-terra [&_a]:underline [&_a:hover]:text-terra-lt">
        {children}
      </div>
    </div>
  );
}
