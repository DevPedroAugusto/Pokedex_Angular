import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor() { }

  apiServices(): void {
    console.log('Função global executada!');
  }
}
