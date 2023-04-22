import { Serializer } from '@angular/compiler';

export class PlaneModel {
  public name!: string;
  public seatAmount!: number;
  public planeNumber!: string;

  constructor(name: string, seatAmount: number, planeNumber: string) {
    this.name = name;
    this.seatAmount = seatAmount;
    this.planeNumber = planeNumber;
  }
}
