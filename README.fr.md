# IndexOf>_ : Un outil contre l'oubli numérique

![IndexOf Logo](https://indexof.thomas-bressel.com/indexof-logo-black.png)

IndexOf>_ est une application pensée pour répondre à un double enjeu : faciliter l'accès à l'information technique pour les développeurs, tout en réhabilitant l'apprentissage actif par la mémorisation.

## 🎯 Vision du projet

Ce projet est né d'un constat personnel et pédagogique : depuis plus de 25 ans, j'ai observé une baisse sensible de la capacité de concentration et de mémorisation chez mes élèves, tendance qui s'est accentuée avec l'évolution des technologies numériques. L'accès facilité à l'information, bien qu'utile, tend à priver l'utilisateur de l'effort nécessaire à l'assimilation en profondeur.

IndexOf>_ adopte une posture volontairement à contre-courant :
- Il ne cherche pas à automatiser le savoir, mais à en favoriser l'appropriation
- Il propose des "anti-sèches numériques", inspirées des résumés que l'on rédigeait à l'école — efficaces non pas pour tricher, mais pour apprendre
- Ces fiches condensées, volontairement décontextualisées, aident à retenir des syntaxes ou structures récurrentes en développement (patterns de code, expressions régulières, commandes, etc.)

## 🚀 Fonctionnalités principales

### Core Features (MVP)
- **Moteur de recherche avancé** : Recherche par mots-clés, tags, ou titres
- **Création et personnalisation de mémos** : Ajout de contenu avec métadonnées
- **Organisation intelligente** : Catégorisation par thèmes ou langages
- **Interface responsive** : Adaptée à tous les supports (mobile, tablette, desktop)
- **Système de favoris** : Marquage des mémos fréquemment utilisés
- **Partage social** : Diffusion sur les réseaux sociaux

### Modèle Freemium
- **Plan gratuit** : Accès limité aux fonctionnalités de base
- **Plan premium** : Accès illimité à toutes les fonctionnalités
- **Plan entreprise** : Solutions pour centres de formation et équipes

## 🏗️ Architecture technique

### Stack technologique
- **Frontend** : React.js (interface utilisateur fluide et réactive)
- **Back-office** : Angular.js (gestion administrative complexe)
- **Backend** : Node.js avec Express/NestJS (architecture microservices)
- **Bases de données** : 
  - MySQL (données utilisateurs et contenu)
  - MongoDB (données d'interface)
  - Redis (cache et sessions)

### Architecture microservices
- **API Gateway** : Point d'entrée unique avec gestion de la sécurité
- **API Utilisateur** : Gestion des profils, authentification, permissions
- **API Contenu** : Gestion des mémos, index, favoris
- **API Interface** : Données d'affichage optimisées
- **API Paiement** : Intégration Stripe/PayPal (conformité PCI DSS)
- **API Génération** : Création automatisée de cheat sheets (futur)

## 🎯 Public cible

- **Développeurs** : Professionnels et passionnés cherchant à centraliser leurs connaissances techniques
- **Formateurs et enseignants** : Partage efficace de ressources avec leurs étudiants
- **Étudiants et apprenants** : Accès facilité aux contenus de formation
- **Centres de formation** : Solutions collaboratives pour l'enseignement technique

## 🔒 Sécurité et conformité

- **Conformité RGPD** : Protection des données personnelles
- **Sécurité renforcée** : Protection contre XSS, CSRF, injections SQL
- **Cryptage des données** : En transit et au repos
- **Haute disponibilité** : 99,9% de temps de fonctionnement
- **Performance optimisée** : Temps de réponse < 1 seconde

## 🌐 Accessibilité

- **Conformité WCAG 2.1** : Interface accessible à tous
- **Navigation clavier** : Utilisation complète sans souris
- **Contraste optimisé** : Lisibilité pour les malvoyants
- **Lecteurs d'écran** : Support complet des technologies d'assistance

## 🛠️ Installation et développement

... pas d'information pour le moment ...


## 📞 Contact

- **Auteur** : Thomas Bressel
- **Email** : tbressel.dev@gmail.com
- **LinkedIn** : [[Page LinkedIn](https://www.linkedin.com/in/tbressel-dev/)]

## 🙏 Remerciements

- Merci à ChatGPT tous les stagiaires de la promo DWWM 2023 qui ont inspiré ce projet.
- Inspiré par 25 ans d'enseignement et d'observation des pratiques d'apprentissage

---

*"La vraie révolution numérique ne consiste pas à automatiser notre pensée, mais à l'augmenter."*