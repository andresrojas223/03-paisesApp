import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  paises: Country[] = [];

   hayError: boolean = false;

   termino: string = "" ;

   

 

  constructor(private paisService: PaisService){}
    

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    if (this.termino === ""){

          false


    }else{

      

      this.paisService.buscarCapital(this.termino).subscribe((paises:any) =>{

        console.log(paises)

        this.paises = paises;
   },(err) => {
       console.log("Error")

       this.hayError = true;
   })

    }
    

 }


 sugerencias(termino:string){

  this.hayError = false


 


}
}
