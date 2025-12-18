import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from "./_components/base-ui/base-ui";
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    BaseUiComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(
    private certificadoService: CertificadoService
  ) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
