import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificadoComponent {
  @Input() nomeAluno: string ='';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  //chamado assim que o componente é instanciado
  constructor(
    private router: Router
  ){}

  /*inicializado depois que o angulat inicializa o componente e o DOM
  ngOnInit(): void {}*/

  redirecionaCertificado(){
    //
    this.router.navigate(['/certificados', this.id]); // certificados/2 - "[routerLink]"
    //this.router.navigateByUrl('/certificados' + this.id); - certificados/2 - "routerLink"

  }
}
