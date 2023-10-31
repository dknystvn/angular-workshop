import { TranslateService } from '@ngx-translate/core';

const FALLBACK_LOCALE_CODE = 'en';

const translateFactory = (translate: TranslateService): (() => Promise<void>) => {
  return async (): Promise<void> => {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(FALLBACK_LOCALE_CODE);
    translate.use(FALLBACK_LOCALE_CODE);

    return Promise.resolve();
  };
};

export { translateFactory };
