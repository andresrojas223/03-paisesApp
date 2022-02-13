import { Component, Input, OnInit } from '@angular/core';
import { PaisInputComponent } from '../../componets/pais-input/pais-input.component';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  

    regiones:string[] = ["africa, americas, asia, europe, oceania"];

}
