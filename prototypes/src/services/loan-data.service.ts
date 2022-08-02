import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanDataService {

  public LoanContractId: string;
  public feeds: any[] = [];

  public activeContractId: string;

  constructor() { }
}