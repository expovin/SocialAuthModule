import { Injectable  } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class DataConfigService {
    private observable: Observable<any>;

    constructor (private http: Http) {}


    private jsonParse(res: Response) {
        console.log(res);
        let body = res.json();
        return body || { };
    }

    getInfo( ): Observable<any[]> {
        return this.http.get('auth/info').map(this.jsonParse);
    }

    loginLocal (credentials): Observable<any> {
        return this.http.post('auth/local', credentials).map(this.jsonParse);
    }

    chkLocal(token): Observable<any> {
        return this.http.get('auth/local?token='+token).map(this.jsonParse);
    }

}
