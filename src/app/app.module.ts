import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileComponent } from './mobile/mobile.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ComputerComponent } from './computer/computer.component';
import { TamilComponent } from './tamil/tamil.component'; 
import { CommonService } from './common.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    TopbarComponent,
    LaptopComponent,
    ComputerComponent,
    TamilComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
