export class Produto {
  public id: number;
  public nome: string;
  public imagem: string;
  public valor: number;
  public quantidade: number;
  public visivel: boolean;
  public jaPegou: boolean;
  public noFiltro: boolean;


  constructor(id, nome, imagem, valor) {
    this.id = id;
    this.quantidade = 1;
    this.nome = nome;
    this.imagem = imagem;
    this.valor = valor;
    this.visivel = true;
    this.jaPegou = false;
    this.noFiltro = true;
  }
}
