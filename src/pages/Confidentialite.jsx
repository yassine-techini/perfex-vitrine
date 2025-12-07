import { Link } from 'react-router-dom'

export default function Confidentialite() {
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
          POLITIQUE DE CONFIDENTIALITÉ
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">1. Introduction</h2>
            <p className="opacity-80">
              DevFactory s'engage à protéger la vie privée des utilisateurs de son site et de ses services. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">2. Données collectées</h2>
            <p className="opacity-80">Nous pouvons collecter les types de données suivants :</p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Informations d'identification (nom, prénom, email)</li>
              <li>Informations de contact professionnel (entreprise, fonction)</li>
              <li>Données de connexion et d'utilisation du service</li>
              <li>Données techniques (adresse IP, navigateur, appareil)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">3. Utilisation des données</h2>
            <p className="opacity-80">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Fournir et améliorer nos services</li>
              <li>Communiquer avec vous concernant votre compte</li>
              <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              <li>Assurer la sécurité de nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">4. Partage des données</h2>
            <p className="opacity-80">
              Nous ne vendons pas vos données personnelles. Nous pouvons partager vos données avec :
            </p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Nos sous-traitants techniques (hébergement, maintenance)</li>
              <li>Les autorités compétentes si la loi l'exige</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">5. Sécurité des données</h2>
            <p className="opacity-80">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">6. Vos droits</h2>
            <p className="opacity-80">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="opacity-80 mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@devfactory.ai" className="text-perfex-red hover:underline">privacy@devfactory.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">7. Cookies</h2>
            <p className="opacity-80">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">8. Contact</h2>
            <p className="opacity-80">
              Pour toute question concernant cette politique de confidentialité, contactez notre délégué à la protection des données : <a href="mailto:privacy@devfactory.ai" className="text-perfex-red hover:underline">privacy@devfactory.ai</a>
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
