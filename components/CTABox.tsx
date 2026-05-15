interface CTABoxProps {
  title?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  locale?: 'en' | 'de';
}

export default function CTABox({
  title,
  body,
  buttonText,
  buttonHref,
  locale = 'en',
}: CTABoxProps) {
  const de = locale === 'de';
  const resolvedTitle = title ?? (de ? 'Benötigen Sie Hilfe?' : 'Need help with this?');
  const resolvedBody = body ?? (de
    ? 'Spanische Steuererklärungen und Bürokratie können komplex sein. Eine lokale Gestoría kann Modelo 210, NIE-Anträge und andere Formalitäten für Sie übernehmen.'
    : 'Spanish tax filings and bureaucracy can be complex. A local gestoría can handle Modelo 210, NIE applications, and other filings on your behalf.');
  const resolvedButtonText = buttonText ?? (de ? 'Gestoría finden →' : 'Find a gestoría →');
  const resolvedButtonHref = buttonHref ?? (de ? '/de/tools/glossary#gestoria' : '/tools/glossary#gestoria');
  const sectionLabel = de ? 'Professionelle Hilfe' : 'Professional help';

  return (
    <div className="not-prose bg-navy-dk rounded-2xl px-8 py-8 my-10">
      <p className="label-terra mb-3">{sectionLabel}</p>
      <h3 className="font-display font-bold text-white text-2xl leading-snug mb-3">{resolvedTitle}</h3>
      <p className="text-white/55 text-[0.9375rem] leading-relaxed mb-6">{resolvedBody}</p>
      <a
        href={resolvedButtonHref}
        className="inline-flex items-center gap-2 bg-terra hover:bg-terra-lt text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
      >
        {resolvedButtonText}
      </a>
    </div>
  );
}
