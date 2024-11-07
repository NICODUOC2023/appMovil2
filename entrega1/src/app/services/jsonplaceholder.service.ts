import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' :'*'
        })
    }


    apiURL = 'https://jsonplaceholder.typicode.com';

    constructor(private http:HttpClient) { }

    // Manejo de errores
    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Error del lado del servidor
            errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    // Método GET para obtener todos los posts
    getPosts(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiURL}/posts`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    // Método GET para obtener un post por ID
    getPost(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/posts/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    // Método POST para crear un nuevo post
    createPost(post: any): Observable<any> {
        return this.http.post<any>(`${this.apiURL}/posts`, JSON.stringify(post), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    // Método PUT para actualizar un post por ID
    updatePost(id: number, post: any): Observable<any> {
        return this.http.put<any>(`${this.apiURL}/posts/${id}`, JSON.stringify(post), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    // Método DELETE para eliminar un post por ID
    deletePost(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/posts/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

}
