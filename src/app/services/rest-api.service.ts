import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSource } from '../shared/data-source';
import { Variable } from '../shared/variable';
import { Filter } from '../shared/filter';
import { ImpactAnalysisRequest } from '../shared/impact-analysis-request';
import { ImpactAnalysisData } from '../shared/impact-analysis-data';
import { Observable, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = 'http://dev.itis-app.com/care-rest';

    //apiURL = 'http://localhost:9090/care-rest';

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // HttpClient API get() method => Fetch DataSources list
    getDataSources(): Observable<DataSource> {
        return this.http.get<DataSource>(this.apiURL + '/api/v1/datasources')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // HttpClient API get() method => Fetch Variable List
    getVariables(datasource: string): Observable<Variable> {
        return this.http.get<Variable>(this.apiURL + '/api/v1/variables?datasource=' + datasource)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getFilters(datasource: string): Observable<Filter> {
        return this.http.get<Filter>(this.apiURL + '/api/v1/filters?datasource=' + datasource)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

  
    // HttpClient API post() method => Get ImpactAnalysisData as Array
    getImpactAnalysis(request: ImpactAnalysisRequest): Observable<ImpactAnalysisData[]> {
        return this.http.
            post<ImpactAnalysisData[]>(this.apiURL + '/api/v1/impact-analysis', JSON.stringify(request), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}