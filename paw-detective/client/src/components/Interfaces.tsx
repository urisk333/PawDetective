import { Dispatch, SetStateAction } from 'react';

export interface Paw {
  _id: string;
  lostOrFound: string;
  picture: string;
  animal: string;
  description: string;
  location: string;
  lat: number;
  long: number;
  email?: string;
  token?: string;
  __v?: number;
  date: Date | string | number;
  address?: string;
}

export interface SendPaw {
  _id?: string;
  lostOrFound: string;
  picture: string;
  animal: string;
  description: string;
  location: string;
  lat: number;
  long: number;
  email?: string;
  token?: string;
  __v?: number;
  date?: Date | string | number;
  address?: string;
}

export interface PawsFormType {
  lostOrFound: string;
  picture: string;
  animal: string;
  description: string;
  location: string;
  lat: number;
  long: number;
}

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
  lat: number;
  long: number;
  time: Date;
}

// export interface ILink {
//   pathname: string,
//   state: object
// }

export interface MapProps {
  setLat?: Dispatch<SetStateAction<Number>>;
  setLong?: Dispatch<SetStateAction<Number>>;
  profileMarker?: {
    lat: number;
    lng: number;
    time: Date;
  };
  pawsArray?: Paw[];
}

export interface MarkerProps {
  lat?: number;
  lng?: number;
  time: Date;
}

export interface MarkerProps2 {
  lat: number;
  lng: number;
  time: Date;
}

export interface PawPostHandler {
  _id?: string;
  lostOrFound: string;
  picture: string;
  animal: string;
  description: string;
  location: string;
  lat: number;
  long: number;
  date: Date;
}
