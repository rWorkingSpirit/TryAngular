import { Injectable } from '@angular/core';
import { motoren } from './motoren';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MotorService {

    constructor(private http: HttpClient){

    }

    ditffproberen()
    {
        alert("in service proberen");
    }

    naardebackend():Observable<motoren>
    {
        console.log("dit is in de Service");
        return this.http.get<motoren>("https://catfact.ninja/fact");
    }

    
}
