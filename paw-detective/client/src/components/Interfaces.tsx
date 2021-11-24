export interface Paw {
  _id: string,
  lostOrFound: string,
  picture: string,
  animal: string,
  description: string,
  location: string,
  lat: number,
  long: number,
  email: string,
  date: Date,
  token?: string,
  __v?: number,
  address?: string,
};

// export interface PawsProfiles {
//   lostOrFound: string,
//   picture: string,
//   animal: string,
//   description: string,
//   address: string,
//   lat: number,
//   long: number,
//   date: Date
// }

export interface IMap {
  lat: number,
  long: number,
  time: Date
}

// export interface ILink {
//   pathname: string,
//   state: object
// }
