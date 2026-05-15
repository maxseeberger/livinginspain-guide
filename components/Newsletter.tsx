'use client';

export default function Newsletter() {
  return (
    <section className="bg-navy-dk py-20">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-center">

          <div>
            <p className="label-terra mb-4">Stay informed</p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight leading-[1.0] mb-5">
              Never miss a<br /> Spanish tax deadline.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              Plain-English deadline reminders before Modelo 210, IBI, and wealth tax — plus alerts when rules change.
            </p>
          </div>

          <div>
            <form
              className="space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/35 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent"
              />
              <button type="submit" className="w-full btn-primary justify-center py-4">
                Get deadline reminders
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
            <p className="text-white/25 text-xs mt-4">No spam. Unsubscribe any time.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
