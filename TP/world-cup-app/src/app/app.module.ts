import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { CardsComponent } from './components/cards/cards.component'
import { FiltrosComponent } from './components/filtros/filtros.component'
import { BusquedaComponent } from './components/busqueda/busqueda.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MainComponent } from './components/pages/Main/Main.component'
import { BusquedaDeFigusComponent } from './components/pages/busquedaDeFigus/busquedaDeFigus.component'
import { LoginComponent } from './components/pages/Login/Login.component'
import { FiltroRadioComponent } from './components/filtroRadio/filtroRadio.component'
import { CardsTiendaComponent } from './components/cardsTienda/cardsTienda.component'
import { CardDetalleComponent } from './components/pages/cardDetalle/cardDetalle.component'
import { BusquedaSobresComponent } from './components/pages/BusquedaSobres/busquedaSobres.component'
import { PerfilComponent} from './components/pages/perfil/perfil.component'
import { NavPerfilComponent } from './components/navPerfil/navPerfil.component'
import { AsideComponent } from './components/aside/aside.component'
@NgModule({
  declarations: [	
    AppComponent,
    BusquedaComponent,
    CardsComponent,
    CardDetalleComponent,
    FiltrosComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BusquedaDeFigusComponent,
    LoginComponent,
    FiltroRadioComponent,
    CardsTiendaComponent,
    BusquedaSobresComponent,
    PerfilComponent,
    NavPerfilComponent,
    AsideComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
