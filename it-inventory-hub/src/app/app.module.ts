import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { UiComponentsModule } from 'ui-components';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { InventoryService } from './services/inventory.service';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { InventoryItemComponent } from './components/browse/inventory-item/inventory-item.component';
import { NamePipe } from './components/browse/inventory-item/to-inventory-icon.pipe';
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';
import { CustomTranslationLoader } from './localization/custom-translation-loader';
import { translateFactory } from './localization/translate-factory';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    LoginComponent,
    CreateItemComponent,
    NamePipe,
    InventoryItemComponent,
    HoverHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslationLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    InventoryService,
    NamePipe,
    TranslatePipe,
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
