interface CTABoxProps {
  title?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABox({
  title = 'Need help with this?',
  body = 'Global Consulting Mallorca handle Modelo 210, NIE applications, and all Spanish tax filings for non-residents. Max uses them personally.',
  buttonText = 'Contact Global Consulting Mallorca →',
  buttonHref = '/professionals/global-consulting-mallorca',
}: CTABoxProps) {
  return (
    <div className="bg-navy rounded-xl px-8 py-8 my-10 text-white">
      <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
      <p className="text-white/80 text-[0.95rem] leading-relaxed mb-5">{body}</p>
      <a
        href={buttonHref}
        className="inline-block bg-terra hover:bg-terra-lt text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-150"
      >
        {buttonText}
      </a>
    </div>
  );
}
