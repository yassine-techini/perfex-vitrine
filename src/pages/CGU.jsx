import { Link } from 'react-router-dom'

export default function CGU() {
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
          CONDITIONS GÉNÉRALES D'UTILISATION
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">1. Objet</h2>
            <p className="opacity-80">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site web Perfex et des services proposés par DevFactory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">2. Acceptation des conditions</h2>
            <p className="opacity-80">
              L'accès et l'utilisation du site impliquent l'acceptation sans réserve des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">3. Description des services</h2>
            <p className="opacity-80">
              Perfex est un ERP AI-Native qui propose une suite complète de modules de gestion d'entreprise :
            </p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Finance et comptabilité</li>
              <li>CRM et relation client</li>
              <li>Gestion des stocks</li>
              <li>Ressources humaines et paie</li>
              <li>Gestion de projets</li>
              <li>Production et manufacturing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">4. Accès au service</h2>
            <p className="opacity-80">
              L'accès au service Perfex nécessite une inscription et la création d'un compte utilisateur. L'utilisateur s'engage à fournir des informations exactes et à maintenir la confidentialité de ses identifiants de connexion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">5. Obligations de l'utilisateur</h2>
            <p className="opacity-80">L'utilisateur s'engage à :</p>
            <ul className="list-disc list-inside opacity-80 mt-4 space-y-2">
              <li>Utiliser le service conformément à sa destination</li>
              <li>Ne pas porter atteinte à la sécurité du service</li>
              <li>Ne pas utiliser le service à des fins illicites</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas transmettre de contenus illicites ou nuisibles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">6. Propriété intellectuelle</h2>
            <p className="opacity-80">
              Tous les éléments du site et du service Perfex (logos, textes, logiciels, bases de données, etc.) sont protégés par le droit de la propriété intellectuelle et restent la propriété exclusive de DevFactory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">7. Responsabilité</h2>
            <p className="opacity-80">
              DevFactory s'efforce d'assurer la disponibilité et le bon fonctionnement du service. Toutefois, DevFactory ne peut garantir une disponibilité ininterrompue et ne saurait être tenue responsable des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">8. Données personnelles</h2>
            <p className="opacity-80">
              Le traitement des données personnelles est régi par notre <Link to="/confidentialite" className="text-perfex-red hover:underline">Politique de Confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">9. Modification des CGU</h2>
            <p className="opacity-80">
              DevFactory se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle. La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">10. Droit applicable</h2>
            <p className="opacity-80">
              Les présentes CGU sont régies par le droit français. Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display tracking-tight mb-4">11. Contact</h2>
            <p className="opacity-80">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à : <a href="mailto:legal@devfactory.tn" className="text-perfex-red hover:underline">legal@devfactory.tn</a>
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
