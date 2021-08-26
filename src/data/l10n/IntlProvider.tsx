import React from 'react';
import { IntlProvider as IntlProviderRI } from 'react-intl';
import { useSelector } from 'react-redux';
import { getMessagesByLocale } from './L10nHelper';
import { selectLocale } from './L10nSlice';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export default function IntlProvider({ children }: Props) {
  const locale = useSelector(selectLocale);
  const messages = getMessagesByLocale(locale);

  return (
    <IntlProviderRI locale={locale} messages={messages}>
      {children}
    </IntlProviderRI>
  );
}
