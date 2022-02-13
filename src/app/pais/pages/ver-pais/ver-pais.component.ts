import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  pais:Country[] = []; 
 

  constructor(private activatedRoute: ActivatedRoute,
              private PaisService: PaisService
    ) { }

  ngOnInit(): void {

this.activatedRoute.params.pipe(

  switchMap((param) => this.PaisService.getPaisPorAlpha(param.id)), tap(console.log)

).subscribe(pais => this.pais = pais)
  

  }

 

}