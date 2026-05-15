'use client';

import type { Locale } from '@/lib/mdx';

interface NewsletterProps {
  locale?: Locale;
}

export default function Newsletter({ locale = 'en' }: NewsletterProps) {
  const de = locale === 'de';
  return (
    <section className="bg-navy-dk py-20">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-center">

          <div>
            <p className="label-terra mb-4">{de ? 'Immer informiert' : 'Stay informed'}</p>
            <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-5">
              {de ? <>Keine spanische<br className="hidden sm:block" /> Steuerfrist mehr verpassen.</> : <>Never miss a<br className="hidden sm:block" /> Spanish tax deadline.</>}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              {de
                ? 'Verständliche Erinnerungen vor Modelo 210, IBI und Vermögenssteuer — plus Alerts bei Regeländerungen.'
                : 'Plain-English reminders before Modelo 210, IBI, and wealth tax — plus alerts when rules change.'}
            </p>
          </div>

          <div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={de ? 'Ihre E-Mail-Adresse' : 'Your email address'}
                required
                className="w-full bg-navy border border-white/20 text-white placeholder:text-white/40 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-terra hover:bg-terra-lt text-white font-semibold text-sm px-6 py-4 rounded-xl transition-colors"
              >
                {de ? 'Fristerinnerungen erhalten' : 'Get deadline reminders'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
            <p className="text-white/30 text-xs mt-4">
              {de ? 'Kein Spam. Jederzeit abmelden.' : 'No spam. Unsubscribe any time.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
