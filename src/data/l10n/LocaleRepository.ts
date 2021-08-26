const LOCAL_STORAGE_KEY = 'userLocale';

function get(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
}

function set(locale: string) {
  localStorage.setItem(LOCAL_STORAGE_KEY, locale);
}

export default { get, set };
