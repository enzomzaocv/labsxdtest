import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Personas:any[]=[];

  constructor(private servicio: PersonasService) { }

  ngOnInit() {
    this.getPersonas();
  }


/*   getPersonas(){
    this.servicio.getPersonas().subscribe(data =>{
      data.forEach(element => this.Personas.push(element))
    } );
  } */
  getPersonas(){
    this.Personas= this.servicio.getPersonas();
  }
}
