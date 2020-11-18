import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmptyService {}

@Injectable({
  providedIn: 'root'
})
export class Store {
  dispatch(action: any): void {}
  select(selector: any): any {
    return {
      subscribe(cb: any): any {}
    };
  }
}



