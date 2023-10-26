import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { UiComponentsModule } from 'ui-components';
import {BrowseComponent} from "./browse/browse.component";
import {CreateItemComponent} from "./create-item/create-item.component";

@NgModule({
  declarations: [AppComponent, BrowseComponent, CreateItemComponent, HoverHighlightDirective],
  imports: [BrowserModule, AppRoutingModule, UiComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
