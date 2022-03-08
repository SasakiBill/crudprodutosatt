import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})

export class ListaDeProdutosComponent implements OnInit {
  public lista_produtos : Produto[] = [];


  constructor(private _router : Router, private produtosService : ProdutosService) {
    
  }

  ngOnInit(): void {
    this.lista_produtos = this.produtosService.getProdutos();
  }

  public excluir(indice : number) {
    let resultado = confirm("Deseja excluir o produto:" + this.produtosService.getProduto(indice).getNome() + "?");
    if(resultado){
      if(this.produtosService.excluirProduto(indice)){
        alert("Produto excluído com sucesso");
      }else{
        alert("Produto não foi excluído!");
      }
    }
  }

  public editar(index : number) : void {
    this._router.navigate(["/editarProduto", index]);
  }

  public irParaCriarProduto() {
    this._router.navigate(["/criarProduto"]);
  }

}
