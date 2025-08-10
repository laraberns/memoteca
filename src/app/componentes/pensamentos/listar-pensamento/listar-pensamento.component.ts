import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual = 1;
  haMaisPensamentos = true;
  filtro = '';
  exibirFavoritos = false;
  listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.carregarPensamentos();
  }

  carregarPensamentos() {
    this.service.listar(this.paginaAtual, this.filtro, this.exibirFavoritos)
      .subscribe((lista) => {
        this.listaPensamentos = lista;
        if (lista.length < 6) {
          this.haMaisPensamentos = false;
        }
      });
  }

  carregarMaisPensamentos() {
    this.paginaAtual++;
    this.service.listar(this.paginaAtual, this.filtro, this.exibirFavoritos)
      .subscribe((lista) => {
        this.listaPensamentos.push(...lista);
        if (lista.length < 6) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.carregarPensamentos();
  }

  mostrarFavoritos() {
    this.exibirFavoritos = true;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.carregarPensamentos();
  }

  mostrarTodos() {
    this.exibirFavoritos = false;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.carregarPensamentos();
  }
}
