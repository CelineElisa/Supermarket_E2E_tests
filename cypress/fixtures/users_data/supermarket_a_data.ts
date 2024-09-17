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
      value: '7dff1ccb-234f-4425-a183-bf2ad210868f',
    };
  }
}