import { FormsModule } from '@angular/forms';
import { FakeService } from './shared/fake.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
