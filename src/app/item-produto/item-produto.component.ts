import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '.././produtos/produto';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.css']
})
export class ItemProdutoComponent implements OnInit {

  @Input() produto: Produto;
  @Output() eventAdicionar = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  enviarParaLista(){
    this.produto.visivel = false;
    this.eventAdicionar.emit({produto : this.produto});
  }

}
