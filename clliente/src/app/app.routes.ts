import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'home', component:HomeComponent},
{path: 'users', component:UsersComponent},

{path: '**',redirectTo: '',pathMatch:'full' },

];
