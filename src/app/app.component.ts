import { Component } from '@angular/core';
import { Produto } from './produtos/produto';
import { Lista } from './lista/lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Array<Produto> = new Array();
  listaAtual: Lista;

  constructor() {
    this.listaAtual = new Lista();
    this.produtos.push(new Produto(1, 'Refrigerante', 'a', 30.00));
    this.produtos.push(new Produto(2, 'Refrigerante 2', 'b', 33.00));
    this.produtos.push(new Produto(3, 'Refrigerante 3', 'c', 32.00));
    this.produtos.push(new Produto(4, 'Refrigerante 4', 'd', 30.00));
  }

  addProdutoNaLista(produto) {
    let existe: boolean = false;
    this.listaAtual.produtos.forEach(function (elemento) {
      if (produto.id == elemento.id) {
        existe = true;
      }
    });
    if (!existe) {
      this.listaAtual.produtos.push(produto);
      this.listaAtual.getValorEstimado();
    }
  }

  removeuItemDaLista(produto: Produto) {
    this.produtos.forEach(element => {
      if (element.id == produto.id) {
        element.visivel = true;
      }
    });
  }

  buscarProduto(buscaDigitada) {
    console.log(buscaDigitada);
    this.produtos.forEach(function (element) {
      if (!element.nome.toLowerCase().includes(buscaDigitada.toLowerCase())) {
        element.noFiltro = false;
      }else{
        element.noFiltro = true;
      }
    });
  }

}
