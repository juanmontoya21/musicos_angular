import { Component } from '@angular/core';
import { Integrantes } from '../interfaces/integrantes';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

  integrantes:Integrantes[]=[
    {"nombre":"Aldo Roberto Rodríguez Baquero ","foto":"https://firebasestorage.googleapis.com/v0/b/fotos-caf5e.appspot.com/o/integarnte2.jpg?alt=media&token=1fb161fd-286b-4ef9-894c-8f1b8c0c907c","rol":"rapero","descripcion":"Su temprana vocación por el deporte le asegura ganar una beca de natación que abandona más tarde para estudiar música –saxofón– en la escuela vocacional Samuel Saumell, después de aprobar los exámenes de aptitud. La carencia de instrumentos musicales, con un precio todavía inaccesible para su bolsillo ciudadano, impiden que pueda concluir sus estudios de música. "},
    {"nombre":"Bian Oscar Rodríguez Gala","foto":"https://firebasestorage.googleapis.com/v0/b/fotos-caf5e.appspot.com/o/integrante1.jpeg?alt=media&token=636aad83-52d2-41fe-b36f-f77411cea536","rol":"rapero","descripcion":"Nace en Ciudad de La habana, el 25 de octubre de 1984, parte de su vida ocurre en el municipio Playa de dicha ciudad; posteriormente se traslada a Nuevo Vedado, desde donde comienza su carrera musical. Sus padres fueron obreros muy trabajadores, ya fallecidos, de los cuales El B ha dicho aprendió sobre el sacrificio, el amor y la dedicación a la familia; a ellos ha dedicado toda su obra.  "},
    
  
  ]

  constructor() {}


}
