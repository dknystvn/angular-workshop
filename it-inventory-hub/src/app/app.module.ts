import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    LoginComponent,
    CreateItemComponent,
    HoverHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiComponentsModule,
  ],
  providers: [InventoryService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
