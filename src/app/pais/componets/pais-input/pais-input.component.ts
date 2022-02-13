import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements  OnInit{

  

  @Output() OnEnter: EventEmitter <string> = new EventEmitter; 
  @Output() OnDebounce: EventEmitter <string> = new EventEmitter 

  @Input() placeholder:string = "";
  
  debouncer:Subject<string> = new Subject();

  termino: string = "" ;

  ngOnInit(){
  
    this.debouncer
    
    .pipe(debounceTime(300))
    .subscribe(valor => {

      console.log("debouncer", valor)
      
    })

}

    

     buscar(){
 
       this.OnEnter.emit(this.termino);
       
       
     }


     teclaPresionada(){

      this.debouncer.next(this.termino);

     }
}