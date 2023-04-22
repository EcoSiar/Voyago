export class AirportModel {
  public name!: string;
  public city!: string;
  public state!: string;
  public airportCode!: string;

  constructor(name: string, city: string, state: string, airportCode: string) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.airportCode = airportCode;
  }
}
