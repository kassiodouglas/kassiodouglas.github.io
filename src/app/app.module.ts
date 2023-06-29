import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// layouts
import { AppComponent } from './resources/layouts/app/app.component';
// navigations
import { NavbarComponent } from './resources/navigation/navbar/navbar.component';
// components
import { ParentComponent } from './resources/components/parent/parent.component';
import { ChildComponent } from './resources/components/child/child.component';
import { OffcanvasComponent } from './resources/components/offcanvas/offcanvas.component';
// pages
import { HomeComponent } from './resources/pages/home/home.component';
import { InterfacesComponent } from './resources/pages/interfaces/interfaces.component';
import { TwowaybindingComponent } from './resources/pages/twowaybinding/twowaybinding.component';
import { ServicosComponent } from './resources/pages/servicos/servicos.component';
import { PipeComponent } from './resources/pages/pipe/pipe.component';
import { CompatilhamentoComponent } from './resources/pages/compatilhamento/compatilhamento.component';
import { ItemDetailComponent } from './resources/pages/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,   
    NavbarComponent,
    HomeComponent,
    InterfacesComponent,    
    TwowaybindingComponent,
    ServicosComponent   , 
    PipeComponent,
    OffcanvasComponent, 
    CompatilhamentoComponent, ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
