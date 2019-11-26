import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CleanComponent } from "./layouts/clean/clean.component";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./Services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

@NgModule({
  declarations: [AppComponent, CleanComponent, LoginComponent, CadastrarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
