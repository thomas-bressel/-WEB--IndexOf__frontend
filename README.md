# IndexOf>_ : A Tool Against Digital Forgetfulness

![IndexOf Logo](https://indexof.thomas-bressel.com/indexof-logo-black.png)

IndexOf>_ is an application designed to address a dual challenge: facilitating access to technical information for developers while rehabilitating active learning through memorization.

## 🌐 Languages / Langues

- [🇬🇧 English](README.md) (current)
- [🇫🇷 Français](README.fr.md)

## 🎯 Project Vision

This project was born from a personal and pedagogical observation: over the past 25 years, I have witnessed a noticeable decline in concentration and memorization abilities among my students, a trend that has accelerated with the evolution of digital technologies. While easier access to information is useful, it tends to deprive users of the effort necessary for deep assimilation.

IndexOf>_ deliberately takes a counter-current stance:
- It doesn't seek to automate knowledge, but to promote its appropriation
- It offers "digital cheat sheets," inspired by the summaries we used to write in school — effective not for cheating, but for learning
- These condensed sheets, deliberately decontextualized, help retain recurring syntaxes or structures in development (code patterns, regular expressions, commands, etc.)

## 🚀 Key Features

### Core Features (MVP)
- **Advanced search engine**: Search by keywords, tags, or titles
- **Memo creation and customization**: Content addition with metadata
- **Smart organization**: Categorization by themes or languages
- **Responsive interface**: Adapted to all devices (mobile, tablet, desktop)
- **Favorites system**: Bookmarking frequently used memos
- **Social sharing**: Distribution on social networks

### Freemium Model
- **Free plan**: Limited access to basic features
- **Premium plan**: Unlimited access to all features
- **Enterprise plan**: Solutions for training centers and teams

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend**: React.js (fluid and responsive user interface)
- **Back-office**: Angular.js (complex administrative management)
- **Backend**: Node.js with Express/NestJS (microservices architecture)
- **Databases**: 
  - MySQL (user and content data)
  - MongoDB (interface data)
  - Redis (cache and sessions)

### Microservices Architecture
- **API Gateway**: Single entry point with security management
- **User API**: Profile management, authentication, permissions
- **Content API**: Management of memos, indexes, favorites
- **Interface API**: Optimized display data
- **Payment API**: Stripe/PayPal integration (PCI DSS compliance)
- **Generation API**: Automated cheat sheet creation (future)

## 🎯 Target Audience

- **Developers**: Professionals and enthusiasts looking to centralize their technical knowledge
- **Trainers and teachers**: Efficient resource sharing with their students
- **Students and learners**: Easy access to training content
- **Training centers**: Collaborative solutions for technical education

## 🔒 Security and Compliance

- **GDPR compliance**: Personal data protection
- **Enhanced security**: Protection against XSS, CSRF, SQL injections
- **Data encryption**: In transit and at rest
- **High availability**: 99.9% uptime
- **Optimized performance**: Response time < 1 second

## 🌐 Accessibility

- **WCAG 2.1 compliance**: Interface accessible to all
- **Keyboard navigation**: Complete usage without mouse
- **Optimized contrast**: Readability for visually impaired users
- **Screen readers**: Full support for assistive technologies

## 🛠️ Installation and Development

... no information available at the moment ...

## 📞 Contact

- **Author**: Thomas Bressel
- **Email**: tbressel.dev@gmail.com
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/tbressel-dev/)

## 🙏 Acknowledgments

- Thanks to ChatGPT and all the trainees from the DWWM 2023 class who inspired this project.
- Inspired by 25 years of teaching and observing learning practices

---

*"The real digital revolution is not about automating our thinking, but augmenting it."*