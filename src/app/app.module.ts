import { NgModule , Injector} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector){  }

  ngDoBootstrap(){
    const customElement = createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('hello-world',customElement);
  }

}
