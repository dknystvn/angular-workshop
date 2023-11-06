import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateServiceStub } from './mocks/translate.service';
import { UiComponentsModule } from 'ui-components';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, UiComponentsModule],
      providers: [
        {
          provide: TranslateService,
          useValue: new TranslateServiceStub(),
        },
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
