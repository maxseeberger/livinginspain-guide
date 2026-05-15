'use client';

export default function Newsletter() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-navy mb-3">Stay on top of Spanish tax deadlines</h2>
          <p className="text-text-lt mb-8">
            We'll send you reminders before key deadlines (Modelo 210, IBI) and flag any rule changes that affect non-resident owners.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 border border-border rounded-md px-4 py-2.5 text-text text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get reminders
            </button>
          </form>
          <p className="text-text-lt text-xs mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}
