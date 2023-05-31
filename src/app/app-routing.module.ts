import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NovoComponent } from './components/novo/novo.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'}, // rota default, vai redirecionar para a rota home
  {path: "home", component: HomeComponent}, // rota -> /home
  {path: "novo", component: NovoComponent},  // rota -> /novo
  {path: "produto", loadChildren: 
        () => import("./features/produto/produto.module").then(m => m.ProdutoModule)} // lazy load-> carregamento tardio, carrega sobre demanda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
