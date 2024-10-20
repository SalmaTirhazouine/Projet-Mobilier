import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';

import { IonicModule } from '@ionic/angular';

import { FautlistComponent } from './fautlist/fautlist.component';
import { HomeComponent } from './home/home.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { RendezvouslistComponent } from './rendezvouslist/rendezvouslist.component';
import { FautlistadminComponent } from './fautlistadmin/fautlistadmin.component';
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


@NgModule({
  declarations: [
    AppComponent,
   
   
    ContactComponent,
        FautlistComponent,
        HomeComponent,
        HomeadminComponent,
        RendezvouslistComponent,
        FautlistadminComponent,
        UpdatefautlistComponent,
        AjouterProduitComponent,
        TablistComponent,
        TablistadminComponent,
        PortlistComponent,
        PortlistadminComponent,
        DreslistComponent,
        DreslistadminComponent,
        BardlistComponent,
        BardlistadminComponent,
        ChamblistComponent,
        ChamblistadminComponent,
        CuilistComponent,
        CuilistadminComponent,
        SalonlistComponent,
        SalonlistadminComponent,
        AboutusComponent,
        VasquelistComponent,
        VasquelistadminComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
