import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CleanComponent } from "./layouts/clean/clean.component";
import { LoginComponent } from "./pages/login/login.component";
import { CadastrarComponent } from "./pages/cadastrar/cadastrar.component";

const routes: Routes = [
  {
    // Layout CleanComponent
    path: "",
    component: CleanComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "cadastrar",
        component: CadastrarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
