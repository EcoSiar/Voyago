export class FlightsModel {
  public airline!: string;
  public price!: number;
  public flightClass!: string;
  public arriveTime!: Date;
  public departTime!: Date;
  public flightNumber!: string;

  constructor(
    airline: string,
    price: number,
    flightClass: string,
    arriveTime: Date,
    departTime: Date,
    flightNumber: string
  ) {
    this.airline = airline;
    this.price = price;
    this.flightClass = flightClass;
    this.arriveTime = arriveTime;
    this.departTime = departTime;
    this.flightNumber = flightNumber;
  }
}
