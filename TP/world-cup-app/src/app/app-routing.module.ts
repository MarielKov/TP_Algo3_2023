import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BusquedaDeFigusComponent } from './components/pages/busquedaDeFigus/busquedaDeFigus.component'
import { LoginComponent } from './components/pages/Login/Login.component'
import { BusquedaSobresComponent } from './components/pages/BusquedaSobres/busquedaSobres.component'
import { CardDetalleComponent } from './components/pages/cardDetalle/cardDetalle.component'
import { MainComponent } from './components/pages/Main/Main.component'
import { PerfilComponent } from './components/pages/perfil/perfil.component'
const routes: Routes = [
{path: 'busquedadefigus', component:BusquedaDeFigusComponent},
{path: 'login', component: LoginComponent }, 
{path: 'busquedadesobres', component: BusquedaSobresComponent}, 
{path: 'main', component: MainComponent}, 
{path: 'cardDetalle', component: CardDetalleComponent},
{path: 'perfil', component: PerfilComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  BusquedaDeFigusComponent,
  LoginComponent,
  BusquedaSobresComponent,
  MainComponent,
  CardDetalleComponent,
  PerfilComponent
]
