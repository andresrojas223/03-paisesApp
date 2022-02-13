import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from '../pais/componets/pais-tabla/pais-tabla.component';




@NgModule({
  declarations: [
    SidebarComponent,
    
  

  ],

exports:[

 SidebarComponent,
 

],

  imports: [
    CommonModule,
    RouterModule,
  
  ]
})
export class SharedModule { }
