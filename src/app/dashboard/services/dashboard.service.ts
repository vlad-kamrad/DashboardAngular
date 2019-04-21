import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
    private apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = '';
    }

    get(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl);
    }
}