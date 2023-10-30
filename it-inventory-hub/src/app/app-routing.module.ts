import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const authGuard = () => inject(AuthGuard).canActivate();

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
