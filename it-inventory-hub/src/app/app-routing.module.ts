import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseComponent} from "./components/browse/browse.component";
import {CreateItemComponent} from "./components/create-item/create-item.component";

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateItemComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
