import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  confirmations: string[] = [];
 
  add(confirmation: string) {
    this.confirmations.push(confirmation);
  }
 
  clear() {
    this.confirmations = [];
  }
}