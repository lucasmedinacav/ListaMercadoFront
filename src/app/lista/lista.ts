import { Produto } from '.././produtos/produto';

export class Lista {
  produtos: Array<Produto> = new Array();
  estimado: number = 0;
  total: number = 0;

  aumentarQuantidade(produto: Produto) {
    produto.quantidade++;
    this.getValorEstimado();
  }

  diminuirQuantidade(produto: Produto) {
    if (produto.quantidade > 0) {
      produto.quantidade--;
      this.getValorEstimado();
    }
  }

  getValorEstimado() {
    this.estimado = 0;
    this.produtos.forEach(element => {
      this.estimado += (element.valor * element.quantidade);
    });
  }

  pegarProduto(produto: Produto) {
    produto.jaPegou = true;
    this.total += (produto.valor * produto.quantidade);
  }
  devolverProduto(produto: Produto){
    produto.jaPegou = false;
    this.total -= (produto.valor * produto.quantidade);
  }

  removerProdutoDaLista(produto: Produto) {
    this.produtos = this.produtos.filter(function(prod){
      return produto.id != prod.id;
    });
    this.getValorEstimado();
    if(produto.jaPegou){
      this.total -= (produto.quantidade * produto.valor);
    }
  }



}
