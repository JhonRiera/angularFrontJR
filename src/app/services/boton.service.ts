import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BotonService {

    constructor(private http: HttpClient) { }

    getBoton() {
        return this.http.get<any>('assets/data/boton.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}