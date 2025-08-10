import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';
import { PensamentoService } from '../pensamento.service';
import { ListarPensamentoComponent } from '../listar-pensamento/listar-pensamento.component';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento!: Pensamento;

  constructor(
    private service: PensamentoService,
    private listarComponent: ListarPensamentoComponent // injeta o pai
  ) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      if (this.listarComponent.exibirFavoritos && !this.pensamento.favorito) {
        // remove da lista no pai sem recarregar
        this.listarComponent.listaPensamentos = this.listarComponent.listaPensamentos
          .filter(p => p.id !== this.pensamento.id);
      }
    });
  }
}
