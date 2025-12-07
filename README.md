# Perfex Site Vitrine

Site vitrine pour **Perfex**, l'ERP AI-Native développé par DevFactory.

## 🚀 Quick Start avec Claude Code

### 1. Cloner le projet

```bash
# Créer le dossier et copier les fichiers
mkdir perfex-vitrine
cd perfex-vitrine

# Ou cloner depuis Git si disponible
git clone <url-repo> perfex-vitrine
cd perfex-vitrine
```

### 2. Lancer Claude Code

```bash
# Dans le dossier du projet
claude

# Claude Code va lire le fichier CLAUDE.md automatiquement
```

### 3. Commandes utiles dans Claude Code

```
# Installer les dépendances
> installe les dépendances npm

# Lancer en mode développement
> lance le serveur de dev

# Builder pour production
> build le projet pour production

# Déployer sur Cloudflare
> déploie sur cloudflare pages
```

## 📦 Installation manuelle

```bash
# Installer les dépendances
npm install

# Lancer en développement (http://localhost:3000)
npm run dev

# Builder pour production
npm run build

# Preview du build
npm run preview
```

## ☁️ Déploiement Cloudflare Pages

### Option 1: Déploiement direct (CLI)

```bash
# S'assurer d'être connecté à Cloudflare
npx wrangler login

# Builder et déployer
npm run build
npx wrangler pages deploy dist --project-name=perfex-vitrine

# Ou en une commande
npm run deploy
```

### Option 2: Déploiement via GitHub (CI/CD)

1. **Pusher le code sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <url-github>
git push -u origin main
```

2. **Connecter à Cloudflare Pages**
   - Aller sur https://dash.cloudflare.com
   - Workers & Pages → Create application → Pages
   - Connect to Git → Sélectionner le repo
   - Configuration:
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Root directory: `/`

3. **Variables d'environnement** (optionnel)
   - Dans Cloudflare Pages → Settings → Environment variables

### Option 3: Domaine personnalisé

1. Dans Cloudflare Pages → Custom domains
2. Ajouter votre domaine (ex: `perfex.devfactory.fr`)
3. Configurer les DNS si pas déjà sur Cloudflare

## 🛠 Stack Technique

| Technologie | Usage |
|-------------|-------|
| React 18 | Framework UI |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Cloudflare Pages | Hosting |

## 📁 Structure du Projet

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
├── CLAUDE.md
└── README.md
```

## 🎨 Design System

### Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Background | `#F5F5F0` | Fond principal |
| Black | `#1a1a1a` | Texte, bordures |
| Red | `#FF3D00` | Accent principal |
| Green | `#00E676` | Succès, validations |
| Blue | `#2979FF` | Info, SaaS |
| Orange | `#FF9100` | Warning, étoiles |
| Purple | `#D500F9` | Accent secondaire |
| Teal | `#00BFA5` | Accent tertiaire |

### Typographie

| Font | Usage |
|------|-------|
| Bebas Neue | Titres, display |
| DM Sans | Corps de texte |
| Space Mono | Code, labels techniques |

## 📝 TODO

- [x] Structure de base
- [x] Composants layout (Navbar, Footer)
- [x] Section Hero avec Terminal
- [x] Section Stats
- [x] Section How It Works
- [x] Section Modules
- [x] Section Testimonials
- [x] Section Deployment (SaaS/On-Premise)
- [x] Section CTA
- [ ] Animations avancées
- [ ] SEO complet (meta, OG images)
- [ ] Page Contact
- [ ] Page Modules détaillée
- [ ] Formulaire de démo
- [ ] Analytics (Plausible/Umami)

## 📄 Licence

Propriétaire - DevFactory © 2025
