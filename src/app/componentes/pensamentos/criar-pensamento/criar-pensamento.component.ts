import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Pensamento de exemplo',
    autoria: 'Autor Exemplo',
    modelo: 'modelo2',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Pensamento salvo com sucesso!');
  }
}
