import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '.././produtos/Produto';
import { Lista } from './lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  @Input() lista: Lista;
  @Output() eventRemover = new EventEmitter();

  constructor() {
    this.lista = new Lista();
  }

  ngOnInit() {
  }

  getClassSeJaPegou(jaPegou): {} {
    return {'bandeira-opaca ' : jaPegou};
  }

  removerProdutoDaLista(produto: Produto){
    this.lista.removerProdutoDaLista(produto);
    produto.jaPegou = false;
    this.eventRemover.emit({'produto': produto});
  }

}
