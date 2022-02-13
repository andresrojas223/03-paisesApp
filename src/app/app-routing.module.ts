import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "src/app/pais/pages/por-capital/por-capital.component";
import { PorRegionComponent } from "src/app/pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "src/app/pais/pages/ver-pais/ver-pais.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";


const routes: Routes = [


   {

       path:"",
       component: PorPaisComponent,
       pathMatch: "full"

   },
   {

     path:"region",
     component: PorRegionComponent
   },

   {

      path: "capital",

      component: PorCapitalComponent

   },

   {

       path: "pais/:id",
       component: VerPaisComponent
     
   },

   {

       path:"**",
       redirectTo:""
   }

]


@NgModule({


    imports:[
      RouterModule.forRoot(routes),
      
    ],

    exports:[

    RouterModule

    ]
})

export class AppRoutinngModule{





}