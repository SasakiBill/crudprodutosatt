import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeProdutosComponent,
    CriarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
