import { Injectable } from '@angular/core';

const observable = {
  pipe(): typeof observable {
    return observable;
  },
  subscribe(): void {}
};

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
    return observable;
  }
}

export const dialog = {
  open(): void {},

  afterOpened(): any {
    return observable;
  },

  afterClosed(): any {
    return observable;
  }
};
