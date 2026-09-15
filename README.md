# Phoky

Site vitrine des trois projets : Mai Coach, Collectra, Lisko.
Next.js (App Router), CSS pur, noir et blanc.

## Lancer le site en local (VS Code)

1. Ouvre le dossier `phoky` dans VS Code.
2. Ouvre le terminal intégré (`Ctrl+ù` ou Terminal → Nouveau terminal).
3. Installe les dépendances : `npm install`
4. Démarre : `npm run dev`
5. Ouvre http://localhost:3000

## Mettre en ligne

### GitHub

```bash
git init
git add .
git commit -m "Phoky"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/phoky.git
git push -u origin main
```

(Crée d'abord le dépôt vide `phoky` sur github.com, sans README.)

### Vercel

1. vercel.com → Add New → Project → Import le dépôt `phoky`.
2. Vercel détecte Next.js tout seul : ne change aucun réglage.
3. Deploy. Le site sort sur `phoky.vercel.app`.

Chaque `git push` sur `main` redéploie automatiquement.

## Modifier le contenu

Tout le texte des trois pages est dans **`lib/products.js`**.
Un objet = un produit. Les champs :

| Champ      | Rôle                                                     |
| ---------- | -------------------------------------------------------- |
| `slug`     | l'adresse de la page (`/collectra`)                       |
| `name`     | le nom affiché                                            |
| `mark`     | le chemin du lettrage dans `/public/marks/`               |
| `status`   | le petit mot en bas du panneau (« En ligne », « À venir ») |
| `tagline`  | la ligne sous le nom sur l'accueil                        |
| `lead`     | le paragraphe d'introduction de la page                   |
| `action`   | le bouton : `{ label, href }`, `href: null` = bouton inerte |
| `sections` | les blocs de la page ; `ordered: true` = liste numérotée   |
| `links`    | les liens externes en bas de page                         |

Ajouter un quatrième projet : copie un objet dans `products`, dépose sa marque
dans `/public/marks/`. L'accueil et la page se créent tout seuls.

> `lib/products.js` contient un `TODO` sur Lisko, à remplacer quand le projet
> sera défini.

## Les images

- `public/marks/` — les lettrages seuls, noir sur fond transparent. C'est ce
  qu'affiche le site : sur fond blanc ils sont noirs, et ils passent en blanc
  quand un panneau s'inverse au survol.
- `public/icons/` — le favicon et l'icône iOS.

Pour remplacer une marque, garde le même nom de fichier et le même principe :
PNG carré, lettrage noir, fond transparent.
