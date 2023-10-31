import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, catchError, first } from 'rxjs';

class CustomTranslationLoader extends TranslateLoader {
  public constructor(private readonly client: HttpClient) {
    super();
  }

  public getTranslation(languageCode: string): Observable<unknown> {
    if (languageCode) {
      return this.client.get(`assets/i18n/${languageCode}.json`).pipe(
        first(),
        catchError(() => {
          throw Error(`Translation file cannot be found for: ${languageCode}`);
        }),
      );
    }

    throw Error(`Language configuration cannot be found for default translation: ${languageCode}`);
  }
}

export { CustomTranslationLoader };
