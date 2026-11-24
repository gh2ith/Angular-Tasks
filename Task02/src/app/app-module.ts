import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Day2 } from './day2/day2';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Productdetails } from './productdetails/productdetails';
import { Footer } from './footer/footer';
import { Productlist } from './productlist/productlist';

@NgModule({
  declarations: [App, Day2, Header, Navbar, Productdetails, Footer, Productlist],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
