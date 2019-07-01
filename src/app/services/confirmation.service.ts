import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//used to send messages to dev / user / console
export class ConfirmationService {
  confirmations: string[] = [];
 
  add(confirmation: string) {
    this.confirmations.push(confirmation);
  }
 
  clear() {
    this.confirmations = [];
  }
}