import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos : Produto[] = [];

  constructor() { 
    this.inserirProduto(new Produto("Camiseta", 30));

    this.inserirProduto(new Produto("Calça", 20));
  }

  public inserirProduto(produto : Produto) : boolean {
    this.produtos.push(produto);
    return true;
  } 

  public getProdutos() : Produto[] {
    return this.produtos;
  }

  public getProduto(indice : number) : Produto {
    return this.produtos[indice];
  }

  public editaProduto(indice : number, produto : Produto) : boolean {
    this.produtos[indice] = produto;
    /*
    this.produtos[indice].setNome(produto.getNome());
    this.produtos[indice].setPreco(produto.getPreco());
    */
    return true;
  }

  public excluirProduto(indice : number) {
    this.produtos.splice(indice, 1);
    return true;
  }

}
