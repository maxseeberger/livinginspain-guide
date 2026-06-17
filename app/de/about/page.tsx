import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns — living-in-spain.com',
  description: 'Warum living-in-spain.com entstanden ist, wer dahintersteckt und unser redaktioneller Ansatz. Ein kostenloser, unabhängiger Ratgeber für nicht-ansässige Immobilieneigentümer in Spanien.',
};

export default function AboutDePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-navy-dk">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="label-terra mb-5">Über uns</p>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight tracking-tight mb-5">
              Über living-in-spain.com
            </h1>
            <p className="text-white/55 text-lg leading-relaxed">
              Ein kostenloser, unabhängiger Ratgeber — gebaut von jemandem, der ihn gebraucht hätte und nicht gefunden hat.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="max-w-2xl prose prose-lg font-sans">

          <h2>Warum diese Website existiert</h2>
          <p>
            Ich bin Max Seeberger — Unternehmensberater mit Sitz in Deutschland und Nicht-Resident mit einer Immobilie auf Mallorca. Als ich mich zum ersten Mal mit Modelo 210, dem NIE-Verfahren, der IBI und allem anderen auseinandersetzen musste, das mit dem Besitz einer Immobilie in Spanien als Ausländer einhergeht, fand ich keinen klaren, aktuellen deutschsprachigen Ratgeber, der erklärt, wie das alles funktioniert.
          </p>
          <p>
            Alles, was ich fand, war entweder auf Spanisch, drei Jahre veraltet, in einem Behörden-PDF vergraben oder zu vage, um nützlich zu sein. Also habe ich den Ratgeber gebaut, den ich mir selbst gewünscht hätte.
          </p>

          <h2>Was diese Website abdeckt</h2>
          <p>
            living-in-spain.com behandelt die praktischen, rechtlichen und finanziellen Aspekte des Immobilienbesitzes in Spanien als Nicht-Resident — hauptsächlich für britische, deutsche und niederländische Staatsangehörige. Die wichtigsten Themen sind:
          </p>
          <ul>
            <li>Nichtresidentensteuer (Modelo 210) und andere spanische Steuern</li>
            <li>NIE-Beantragung und Aufenthaltsregeln</li>
            <li>Kauf und Verkauf von Immobilien als Nicht-Resident</li>
            <li>Erbschaftsteuer, spanisches Testament und Nachlassplanung</li>
            <li>Banking, Währungsumtausch und Alltag in Spanien</li>
            <li>Mallorca-spezifische Ratgeber inkl. Maritime und Liegeplätze</li>
          </ul>
          <p>
            Alle Inhalte sind auch auf Englisch unter <Link href="/" className="text-terra hover:text-terra-lt transition-colors">living-in-spain.com</Link> verfügbar.
          </p>

          <h2>Redaktioneller Ansatz</h2>
          <p>
            Jeder Artikel ist praktisch und spezifisch geschrieben — nicht vage. Wo Regeln je nach Region variieren oder sich im Laufe der Zeit ändern, wird dies ausdrücklich angegeben. Alle Inhalte tragen ein Datum der letzten Aktualisierung.
          </p>
          <p>
            Diese Website ist keine Rechtsanwalts- oder Steuerberatungskanzlei. Die Ratgeber sind informativ — sie helfen Ihnen, die Zusammenhänge zu verstehen, sich auf ein Gespräch mit Ihrer Gestoría oder Ihrem Abogado vorzubereiten und die richtigen Fragen zu stellen. Wir empfehlen immer, Einzelheiten mit einem qualifizierten spanischen Fachmann zu verifizieren.
          </p>

          <h2>Unabhängigkeit</h2>
          <p>
            living-in-spain.com ist unabhängig im Besitz und Betrieb. Es bestehen keine Verbindungen zu Anwaltskanzleien, Gestorías, Banken oder Immobilienagenturen. Es gibt keine gesponserten Artikel und keine bezahlten Platzierungen. Die Website wird durch Display-Werbung unterstützt.
          </p>

          <h2>Kontakt</h2>
          <p>
            Fragen, Korrekturen oder Feedback sind willkommen unter{' '}
            <a href="mailto:info@carsenmallorca.com" className="text-terra hover:text-terra-lt transition-colors">
              info@carsenmallorca.com
            </a>
            .
          </p>
          <p>
            Vollständige rechtliche Angaben finden Sie im <Link href="/de/legal/impressum" className="text-terra hover:text-terra-lt transition-colors">Impressum</Link>.
          </p>

        </div>
      </div>
    </div>
  );
}
