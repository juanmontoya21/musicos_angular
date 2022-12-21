import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URI:string="https://api.spotify.com/v1/artists/4Y6VI2Mfdhvb1RImggzOiY/top-tracks?market=US";
  token:string="Bearer BQASicp8fp6NvQbPxEXmn_HEFMW60xseonOvVtOAsCgovvo7j7XynO6wMAYvWawFynDLbBIUu-ihaulenyuhoIUlJICYeXQBcGEzqjlkVSKa7EjioE3yyr0Z_Bdaa9GVQ8eiULUpgDWWXwwkwLN_uAoQBGM9LjGJZM1tWbKgVWwEmCUiWLMx14pOmWsFjjis4hk"
  constructor(public peticion: HttpClient) {
    console.log("arrancando servicio")

  }

  public traerCanciones():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    };

    return this.peticion.get(this.URI,httpOptions)
  }
}
