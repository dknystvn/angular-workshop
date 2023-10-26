import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { UiComponentsModule } from 'ui-components';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import {InventoryService} from "./services/inventory.service";

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    CreateItemComponent,
    HoverHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiComponentsModule,
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
