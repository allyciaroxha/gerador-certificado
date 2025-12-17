import { Component, OnInit } from '@angular/core';
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadosService: CertificadoService){  }

  ngOnInit(): void {
      this.certificados = this.certificadosService.certificados;
      console.log(this.certificados);
  }
}
