import { Component } from '@angular/core';
import { Produto } from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-produtos';
  /*public nome : string | undefined;
  public preco : number | undefined;
  public edicao : boolean = false;
  public indice : number = -1;*/

  constructor() {

  }

  /*public salvar() {
    //console.log(this.nome + " " + this.preco);
    if(!this.nome) {
      alert("Nome é obrigatório!");
      return;
    }
    if(!this.preco) {
      alert("Preço é obrigatório!");
      return;
    }

    if(this.indice == -1) {
      let produto = new Produto(this.nome, this.preco);
      this.lista_produtos.push(produto);
      alert("Produto cadastrado com sucesso!");
    }
    else {
      this.lista_produtos[this.indice].setNome(this.nome);
      this.lista_produtos[this.indice].setPreco(this.preco);
      alert("Produto alterado com sucesso!");
      this.edicao = false;
      this.indice = -1;
    }
    
    this.nome = undefined;
    this.preco = undefined;
  }*/

  /*public excluir(index : number) {
    //console.log(index);
    this.lista_produtos.splice(index, 1);
    alert("Produto excluído com sucesso!")
  }

  public editar(index : number) {
    this.edicao = true;
    this.indice = index;
    this.nome = this.lista_produtos[index].getNome();
    this.preco = this.lista_produtos[index].getPreco();
  }*/
}
