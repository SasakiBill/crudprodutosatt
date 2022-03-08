import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';

const routes: Routes = [
  {path:'listaDeProdutos', component: ListaDeProdutosComponent},
  {path:'criarProduto', component:CriarProdutoComponent},
  {path:'editarProduto/:indice', component:EditarProdutoComponent},
  {path:'**', redirectTo:"/listaDeProdutos"},
  {path:'', redirectTo:"/listaDeProdutos", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
