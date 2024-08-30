import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class personService {

    constructor(private http: HttpClient) { }

    getPerson() {
        return this.http.get<any>('localhost/')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}