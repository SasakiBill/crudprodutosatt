import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public formEditar : FormGroup;
  private indice : number = -1;

  constructor(private _router : Router, private _actRouter : ActivatedRoute, 
    private _produtosService : ProdutosService, private _formBuilder : FormBuilder) { 
      this.formEditar = this._formBuilder.group({
        nome : ['', [Validators.required, Validators.minLength(5)]],
        preco : ['', [Validators.required]]
      }); 
    }

  ngOnInit(): void {
    this._actRouter.params.subscribe((parametros)=>{
      if(parametros["indice"]){
        this.indice = parametros["indice"];
        let produto = this._produtosService.getProduto(this.indice);
        this.formEditar = this._formBuilder.group({
          nome : [produto.getNome, [Validators.required, Validators.minLength(5)]],
          preco : [produto.getPreco, [Validators.required]]
        }); 
      }
    });
  
  }

  private validarFormulario(){
    for(let campos in this.formEditar.controls){
      this.formEditar.controls[campos].markAsTouched();
    }
  }

  public submitForm(){
    this.validarFormulario();
    if(!this.formEditar.valid){
      //alert("Teste");
      return;
    }
    this.salvar();
  }

  public salvar() {
  
    let produto = new Produto(this.formEditar.controls["nome"].value, 
    this.formEditar.controls["preco"].value);
    if(this._produtosService.editaProduto(this.indice, produto)){
      alert("Produto salvo com sucesso!");
      this._router.navigate(["/listaDeProdutos"]);
    }else{
      alert("Erro ao salvar produto!");
    }
  }

}
