import { Messages } from './L10n.config';
import LocaleRepository from './LocaleRepository';

const DEFAULT_LOCALE = 'pt-BR';
const SUPPORTED_LOCALES = [DEFAULT_LOCALE];

function getMessagesByLocale(locale: string): Record<string, string> {
  const [lang] = locale != null ? locale.split('-') : [];
  return Messages[locale] || Messages[lang] || Messages.default;
}

function getLocale(): string {
  const locale = LocaleRepository.get() || navigator.language;
  if (SUPPORTED_LOCALES.includes(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}

export { getMessagesByLocale, getLocale };
