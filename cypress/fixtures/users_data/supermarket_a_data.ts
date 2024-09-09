export class SupermarketAData {
  zipCode: string;
  address: string;
  locationCookie: {
        name: string;
        value: string;
    };
  constructor() {
    this.zipCode = 'Les Halles 75001';
    this.address = '20 Rue Coquillière';
    this.locationCookie = {
      name: 'lark-journey',
      value: 'f38d9460-d945-4820-a819-7bc4fdd07bdf',
    };
  }
}