import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const authGuard = (): Observable<boolean | UrlTree> => inject(AuthGuard).canActivate();

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'browse', component: BrowseComponent, canActivate: [authGuard] },
  { path: 'create', component: CreateItemComponent, canActivate: [authGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
