import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  // DUMB COMPONENT
  // Receives data from the parent component
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false,
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
