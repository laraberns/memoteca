import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe((pensamento) => {
      this.pensamento = pensamento;
      this.router.navigate(["/listarPensamento"])
    });
  }

  cancelar() {
      this.router.navigate(["/listarPensamento"])
  }
}
