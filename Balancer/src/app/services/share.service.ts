import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private data;

  constructor() { }

  getData() {
    const returnedData = this.data;
    this.data = null;
    return returnedData;
  }

  setData(data) {
    this.data = data;
  }
}
