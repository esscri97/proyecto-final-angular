import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';

export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent, title:'Clima'},
{path: 'home', component:HomeComponent, title:'Home'},
{path: 'users', component:UsersComponent, title:'Users'},
{path: 'calculadora', component:CalculadoraComponent, title:'Calculadora'},
{path: 'adivinanza', component:AdivinanzaComponent, title:'Adivinanza'},

{path: '**',redirectTo: '',pathMatch:'full' },

];

