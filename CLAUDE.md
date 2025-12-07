# CLAUDE.md - Perfex Site Vitrine

## Contexte Projet

Site vitrine pour **Perfex**, un ERP AI-Native développé par DevFactory.
Design: **Brutalist Editorial** - typographie bold, grilles strictes, contrastes forts.

## Stack Technique

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Déploiement**: Cloudflare Pages
- **Fonts**: Bebas Neue (titres), DM Sans (corps), Space Mono (code)

## Structure du Projet

```
perfex-vitrine/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Modules.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Deployment.jsx
│   │   │   └── CTA.jsx
│   │   └── ui/
│   │       ├── Terminal.jsx
│   │       └── ModuleCard.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── wrangler.toml
└── CLAUDE.md
```

## Commandes Principales

```bash
# Installation
npm install

# Développement local
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Déploiement Cloudflare
npx wrangler pages deploy dist
```

## Conventions de Code

### Composants React
- Functional components avec hooks
- Nommage PascalCase pour les composants
- Props destructurées
- Export default pour les composants principaux

### Tailwind CSS
- Utiliser les classes utilitaires Tailwind
- Couleurs principales définies dans tailwind.config.js
- Pas de CSS custom sauf pour les animations

### Style Brutalist
- Bordures noires épaisses (border-2 border-black)
- Typographie massive pour les titres
- Contrastes forts (noir/blanc + accents couleur)
- Grilles strictes
- Hover states avec inversion de couleurs

## Palette de Couleurs

```js
colors: {
  'perfex-bg': '#F5F5F0',      // Fond principal
  'perfex-black': '#1a1a1a',   // Noir principal
  'perfex-red': '#FF3D00',     // Accent principal
  'perfex-green': '#00E676',   // Succès/Validation
  'perfex-blue': '#2979FF',    // Info/SaaS
  'perfex-orange': '#FF9100',  // Warning
  'perfex-purple': '#D500F9',  // Accent secondaire
  'perfex-teal': '#00BFA5',    // Accent tertiaire
}
```

## Sections à Développer

1. **Navbar** - Navigation fixe avec logo, liens, horloge, CTA
2. **Hero** - Titre massif + Terminal interactif avec démo chat
3. **Stats** - Barre de statistiques (ARR, taux succès, projets, temps gagné)
4. **How It Works** - 3 étapes (Parlez → IA comprend → C'est fait)
5. **Modules** - Grille des 6 modules principaux avec hover effects
6. **Testimonials** - Carrousel témoignages clients
7. **Deployment** - Options SaaS vs On-Premise
8. **CTA** - Call-to-action final
9. **Footer** - Liens, réseaux sociaux, mentions légales

## Animations CSS Requises

```css
/* Marquee horizontal */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Fade in pour messages chat */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Points d'Attention

- [ ] Terminal avec démo auto-play du chat IA
- [ ] Hover effects sur les modules avec changement de couleur
- [ ] Navigation sticky avec backdrop blur
- [ ] Responsive design (mobile-first)
- [ ] Marquee animé dans le hero
- [ ] Carrousel témoignages fonctionnel

## Déploiement Cloudflare Pages

1. Build le projet: `npm run build`
2. Le dossier `dist/` contient les fichiers statiques
3. Déployer: `npx wrangler pages deploy dist`
4. Ou connecter le repo GitHub à Cloudflare Pages pour CI/CD

## URLs de Production

- Production: `perfex.pages.dev` (ou domaine custom)
- Preview: généré automatiquement par Cloudflare

## TODO

- [ ] Setup initial du projet
- [ ] Composants de base (Navbar, Footer)
- [ ] Section Hero avec Terminal
- [ ] Sections intermédiaires
- [ ] Section Deployment (SaaS/On-Premise)
- [ ] Responsive design
- [ ] Animations et micro-interactions
- [ ] SEO (meta tags, OG images)
- [ ] Déploiement Cloudflare Pages
