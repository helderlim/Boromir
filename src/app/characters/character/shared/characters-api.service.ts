import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = 'e9a090ef362f655e0bfea82e861c08d1';
  HASH = '879f7baa4cd08dbeaea977c590f7af94';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1564731162583&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient ) { }

  getAllCharacteres(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}
