interface CTABoxProps {
  title?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABox({
  title = 'Need help with this?',
  body = 'Spanish tax filings and bureaucracy can be complex. A local gestoría can handle Modelo 210, NIE applications, and other filings on your behalf.',
  buttonText = 'Find a gestoría →',
  buttonHref = '/tools/glossary#gestoria',
}: CTABoxProps) {
  return (
    <div className="not-prose bg-navy-dk rounded-2xl px-8 py-8 my-10">
      <p className="label-terra mb-3">Professional help</p>
      <h3 className="font-display font-bold text-white text-2xl leading-snug mb-3">{title}</h3>
      <p className="text-white/55 text-[0.9375rem] leading-relaxed mb-6">{body}</p>
      <a
        href={buttonHref}
        className="inline-flex items-center gap-2 bg-terra hover:bg-terra-lt text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
}
