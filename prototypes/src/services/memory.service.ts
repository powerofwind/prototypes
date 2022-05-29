import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  public data: any;
  public isAgree: boolean;
  public isPay: boolean;
  public isAgreeM2: boolean;
  public isPayM2: boolean;
  public isPayM3: boolean;
  public isHomeM2: boolean;
  public isTopUp: boolean;

  constructor() { }
}
