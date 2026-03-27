export const languages = {
  en: "English",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "site.title": "Sabri Akbas",
    "site.description": "My portfolio site",
  },
  it: {
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.projects": "Progetti",
    "nav.contact": "Contatti",
    "site.title": "Sabri Akbas",
    "site.description": "Il mio sito portfolio",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "site.title": "Sabri Akbas",
    "site.description": "Meine Portfolio-Seite",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "site.title": "Sabri Akbas",
    "site.description": "Mon site portfolio",
  },
};

export default translations;
