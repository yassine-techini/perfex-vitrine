import { Link } from 'react-router-dom'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-perfex-bg text-perfex-black">
      {/* Header */}
      <header className="border-b-2 border-black p-6 lg:p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="font-display text-white text-xl">P</span>
            </div>
            <span className="text-2xl font-display tracking-tighter">PERFEX</span>
          </Link>
          <Link to="/" className="text-sm font-bold hover:text-perfex-red transition-colors">
            ← RETOUR
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6 lg:p-12">
        <h1 className="text-4xl lg:text-6xl font-display tracking-tighter mb-8">
          MENTIONS LÉGALES
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">1. Éditeur du site</h2>
            <p className="opacity-80">
              Le site <strong>Perfex</strong> est édité par :<br /><br />
              <strong>DevFactory</strong><br />
              Société par actions simplifiée (SAS)<br />
              Siège social : Tunisie<br />
              Email : <a href="mailto:contact@devfactory.tn" className="text-perfex-red hover:underline">contact@devfactory.tn</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">2. Directeur de la publication</h2>
            <p className="opacity-80">
              Le directeur de la publication est le représentant légal de DevFactory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">3. Hébergement</h2>
            <p className="opacity-80">
              Le site est hébergé par :<br /><br />
              <strong>Cloudflare, Inc.</strong><br />
              101 Townsend St, San Francisco, CA 94107, États-Unis<br />
              Site web : <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-perfex-red hover:underline">www.cloudflare.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">4. Propriété intellectuelle</h2>
            <p className="opacity-80">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, sons, logiciels, etc.) est la propriété exclusive de DevFactory ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="opacity-80 mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de DevFactory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">5. Limitation de responsabilité</h2>
            <p className="opacity-80">
              DevFactory s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DevFactory ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">6. Contact</h2>
            <p className="opacity-80">
              Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:legal@devfactory.tn" className="text-perfex-red hover:underline">legal@devfactory.tn</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-black/10">
          <p className="text-sm opacity-60">Dernière mise à jour : Décembre 2025</p>
        </div>
      </main>
    </div>
  )
}
