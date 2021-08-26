import { AxiosRequestConfig } from 'axios';
import { getLocale } from '@/data/l10n/L10nHelper';

export default async function AxiosLanguageInterceptor(
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  config.headers['Accept-Language'] = getLocale();
  return config;
}
