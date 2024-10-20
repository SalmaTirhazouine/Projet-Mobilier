import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezvouslistComponent } from './rendezvouslist/rendezvouslist.component';
import { FautlistadminComponent } from './fautlistadmin/fautlistadmin.component';
import { ContactComponent } from './contact/contact.component';
import { FautlistComponent } from './fautlist/fautlist.component';
import { HomeComponent } from './home/home.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { BrowserModule } from '@angular/platform-browser';
import { UpdatefautlistComponent } from './updatefautlist/updatefautlist.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { TablistComponent } from './tablist/tablist.component';
import { TablistadminComponent } from './tablistadmin/tablistadmin.component';
import { PortlistComponent } from './portlist/portlist.component';
import { PortlistadminComponent } from './portlistadmin/portlistadmin.component';
import { DreslistComponent } from './dreslist/dreslist.component';
import { DreslistadminComponent } from './dreslistadmin/dreslistadmin.component';
import { BardlistComponent } from './bardlist/bardlist.component';
import { BardlistadminComponent } from './bardlistadmin/bardlistadmin.component';
import { ChamblistComponent } from './chamblist/chamblist.component';
import { ChamblistadminComponent } from './chamblistadmin/chamblistadmin.component';
import { CuilistComponent } from './cuilist/cuilist.component';
import { CuilistadminComponent } from './cuilistadmin/cuilistadmin.component';
import { SalonlistComponent } from './salonlist/salonlist.component';
import { SalonlistadminComponent } from './salonlistadmin/salonlistadmin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { VasquelistComponent } from './vasquelist/vasquelist.component';
import { VasquelistadminComponent } from './vasquelistadmin/vasquelistadmin.component';

const routes: Routes = [
  {path: 'vasquelistadmin', component:VasquelistadminComponent},
  {path: 'vasquelist', component:VasquelistComponent},
  {path: 'aboutus', component :AboutusComponent},
  {path: 'salonlistadmin', component :SalonlistadminComponent},
  {path: 'salonlist', component :SalonlistComponent},
  {path: 'cuilistadmin', component :CuilistadminComponent},
  {path: 'cuilist', component :CuilistComponent},
  {path: 'chamblistadmin', component :ChamblistadminComponent},
  {path: 'chamblist', component :ChamblistComponent},
  {path: 'bardlistadmin', component :BardlistadminComponent},
  {path: 'bardlist', component: BardlistComponent},
  {path: 'dreslist', component:DreslistComponent},
  {path: 'dreslistadmin',component:DreslistadminComponent},
  {path: 'portlist', component: PortlistComponent},
  {path: 'portlistadmin',component: PortlistadminComponent},
  {path: 'tablistadmin', component: TablistadminComponent},
  {path: 'tablist',component: TablistComponent},
  {path: 'ajouter-produit', component: AjouterProduitComponent},
  {path: 'fautlistadmin', component: FautlistadminComponent},
  {path: 'rendezvouslist', component: RendezvouslistComponent},
  {path: 'fautlist', component: FautlistComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',  component: HomeComponent},
  {path: 'homeadmin',  component: HomeadminComponent},
  {path: 'updatefautlist/:id', component: UpdatefautlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }





