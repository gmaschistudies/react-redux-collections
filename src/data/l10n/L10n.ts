import { createIntl, createIntlCache, IntlShape } from 'react-intl';
import { getLocale, getMessagesByLocale } from './L10nHelper';

type IL10n = {
  formatMessage: (option: Record<string, string>) => string;
  loadMessages(locale: string): void;
};

function L10n(): IL10n {
  let intl: IntlShape;

  function loadMessages(locale: string) {
    const cache = createIntlCache();

    intl = createIntl(
      {
        locale,
        defaultLocale: 'pt',
        messages: getMessagesByLocale(locale),
      },
      cache
    );
  }

  loadMessages(getLocale());

  return {
    formatMessage(option: Record<string, string>): string {
      return intl.formatMessage(option);
    },
    loadMessages,
  };
}

export default L10n();
