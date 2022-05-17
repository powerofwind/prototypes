import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  public data: any;
  public isAgree: boolean;
  public isPay: boolean;

  constructor() { }
}
