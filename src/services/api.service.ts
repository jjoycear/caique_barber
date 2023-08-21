import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiRoot = environment.API;

  constructor(private http: HttpClient) { }

  postAuth(body: any): Observable<any>{
    return this.http.post(`${this.apiRoot}login`, body);
  }

  getBarbeiros(): Observable<any>{
    return this.http.get(`${this.apiRoot}barbeiros`);
  }

  getServicos(): Observable<any>{
    return this.http.get(`${this.apiRoot}servico`);
  }

  getDiasLivres(barbeiro_id: number, tempo_servico: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('barbeiro_id', barbeiro_id);
    params = params.append('tempo_servico', tempo_servico);
    return this.http.get(`${this.apiRoot}dias-livres`, { params: params });
  }

  getHorariosLivres(barbeiro_id: number, tempo_servico: string, data_sugerida: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('barbeiro_id', barbeiro_id);
    params = params.append('data_sugerida', data_sugerida);
    params = params.append('tempo_servico', tempo_servico);
    return this.http.get(`${this.apiRoot}horarios-livres`, { params: params });
  }

}
