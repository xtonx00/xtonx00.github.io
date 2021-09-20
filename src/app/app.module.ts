import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { BackgroundColorHandlerComponent } from './core/shared/background-color-handler/background-color-handler.component';
import { CardComponent } from './core/components/card/card.component';
import { CardManagerComponent } from './core/components/card-manager/card-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './core/components/contacts/contacts.component';
import { ScrollToButtonComponent } from './core/components/scroll-to-button/scroll-to-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BackgroundColorHandlerComponent,
    CardComponent,
    CardManagerComponent,
    ContactsComponent,
    ScrollToButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
