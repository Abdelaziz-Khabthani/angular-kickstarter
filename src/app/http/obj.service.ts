import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ObjService {
    
    constructor(private http: Http, private httpClient: HttpClient) {}
    
    postObjs(objs: {label: string, value: string}[]): Observable<any> {
        const headers: Headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://test-57f73.firebaseio.com/data.json', objs, {
            headers: headers
        });
    }

    putObjs(objs: {label: string, value: string}[]): Observable<any> {
        const headers: Headers = new Headers({'Content-type': 'application/json'});
        return this.http.put('https://test-57f73.firebaseio.com/data.json', objs, {
            headers: headers
        });
    }

    putObjsNew(objs: {label: string, value: string}[]): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
        return this.httpClient.put('https://test-57f73.firebaseio.com/data.json', objs, {
            headers: headers
        });
    }

    getObjs(): Observable<any> {
        // return this.http.get('https://test-57f73.firebaseio.com/data.json');
        // To transform data and wrap it inside a promise we can use pipe map
        return this.http.get('https://test-57f73.firebaseio.com/data.json')
        .pipe(
            map((response: Response) => {
                    // transform code
                    return response.json();
                }
            )
        )
    }

    getObjsNew(): Observable<any> {
        return this.httpClient.get<{label: string, value: string}[]>('https://test-57f73.firebaseio.com/data.json')
        .pipe(
            map((response) => {
                    // transform code
                    return response
                }
            )
        )
    }

    getName() {
        return this.http.get('https://test-57f73.firebaseio.com/name.json')
        .pipe(
            map((response: Response) => {
                return response.json();
            })
        )
    }
}