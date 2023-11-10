// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { CompradorComponent } from './components/comprador/comprador.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VendedorComponent,
    CompradorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'vendedor', component: VendedorComponent },
      { path: 'comprador', component: CompradorComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
