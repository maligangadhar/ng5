import { EventEmitter } from '@angular/core';

export interface IFoodService {
  getReceipList: () => void;
  getReceipByRating: () => void;
  getReceipByPopularity: () => void;
}

export interface IBroadcastService {
  broadcast: (key: string, data: any) => void;
  DataChange: EventEmitter<any>;
  clear: () => void;
}

export interface IKeyData {
  key: string;
  data: any;
}

export interface IStorageService {
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => any;
  clearItem: (key: string) => void;
  clearStorage: () => void;
}

