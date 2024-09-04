import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class personService {

    constructor(private http: HttpClient) { }

    postPerson(data: any) {
        return this.http.post<any>('assets/data/person.json', data)
          .toPromise()
          .then(res => res.data as any[])
          .then(data => data);
      }
}