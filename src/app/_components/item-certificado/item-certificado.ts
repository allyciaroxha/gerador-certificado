import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: string = '6';
  //chamado assim que o componente é instanciado
  constructor(
    private router: Router
  ){}

  /*inicializado depois que o angulat inicializa o componente e o DOM
  ngOnInit(): void {}*/

  redirecionaCertificado(){
    //
    this.router.navigate(['/certificados', 2]); // certificados/2 - "[routerLink]"
    //this.router.navigateByUrl('/certificados' + this.id); - certificados/2 - "routerLink"

  }
}
