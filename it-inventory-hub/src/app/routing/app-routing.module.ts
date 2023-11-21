import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BrowseComponent } from '../components/browse/browse.component';
import { CreateItemComponent } from '../components/create-item/create-item.component';
import { LoginComponent } from '../components/login/login.component';
import { AppPath } from './app-path';
import { AuthGuard } from './guards/auth.guard';

const authGuard = (): Observable<boolean | UrlTree> => inject(AuthGuard).canActivate();

const routes: Routes = [
  { path: '', redirectTo: AppPath.LOGIN, pathMatch: 'full' },
  { path: AppPath.LOGIN, component: LoginComponent },
  { path: AppPath.BROWSE, component: BrowseComponent, canActivate: [authGuard] },
  { path: AppPath.CREATE, component: CreateItemComponent, canActivate: [authGuard] },
  { path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
