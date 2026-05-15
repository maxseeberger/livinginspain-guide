interface CTABoxProps {
  title?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABox({
  title = 'Need help with this?',
  body = 'Global Consulting Mallorca handle Modelo 210, NIE applications, and all Spanish tax filings for non-residents. Used personally by the site owner.',
  buttonText = 'Contact Global Consulting Mallorca →',
  buttonHref = '/professionals/global-consulting-mallorca',
}: CTABoxProps) {
  return (
    <div className="not-prose bg-navy rounded-2xl px-8 py-8 my-10 text-white">
      <p className="text-2xs font-semibold uppercase tracking-widest text-terra mb-2">Recommended gestoría</p>
      <h3 className="font-serif text-xl text-white font-semibold mb-3">{title}</h3>
      <p className="text-white/70 text-[0.9375rem] leading-relaxed mb-6">{body}</p>
      <a
        href={buttonHref}
        className="inline-block bg-terra hover:bg-terra-lt text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-150 shadow-sm"
      >
        {buttonText}
      </a>
    </div>
  );
}
