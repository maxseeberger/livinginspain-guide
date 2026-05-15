type CalloutVariant = 'warning' | 'tip' | 'info';

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const styles: Record<CalloutVariant, { border: string; bg: string; icon: string; titleColor: string }> = {
  warning: { border: 'border-amber-400', bg: 'bg-amber-50',  icon: '⚠️', titleColor: 'text-amber-800' },
  tip:     { border: 'border-green',    bg: 'bg-emerald-50', icon: '💡', titleColor: 'text-green' },
  info:    { border: 'border-blue-400', bg: 'bg-blue-50',    icon: 'ℹ️', titleColor: 'text-blue-800' },
};

export default function Callout({ variant = 'info', title, children }: CalloutProps) {
  const s = styles[variant];
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} px-5 py-4 my-6 rounded-r-md`}>
      {title && (
        <p className={`font-semibold font-serif text-base mb-1 ${s.titleColor}`}>
          {s.icon} {title}
        </p>
      )}
      <div className="text-text text-[0.95rem] leading-relaxed [&>p]:mb-0">{children}</div>
    </div>
  );
}
