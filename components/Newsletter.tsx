'use client';

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-terra text-xs font-semibold uppercase tracking-widest mb-4">Stay informed</p>
          <h2 className="font-serif text-white text-3xl lg:text-[2rem] font-semibold mb-4">
            Never miss a Spanish tax deadline
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Reminders before key deadlines (Modelo 210, IBI) and plain-English explanations of rule changes that affect non-resident owners.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get reminders
            </button>
          </form>
          <p className="text-white/35 text-xs mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}
