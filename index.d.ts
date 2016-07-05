import { Promise } from 'es6-promise';

export function initialize(options: InitializeOptions);
export function connect(options?: ConnectOptions): Promise<any>;

export function get(path: string, params?: any): Promise<any>;
export function post(path: string, params?: any): Promise<any>;
export function put(path: string, params?: any): Promise<any>;
export function delete(path: string): Promise<any>;

export function upload(options: any): Promise<any>;
export function resolve(url: string): Promise<any>;
export function oEmbed(url: string, params?: any): Promise<any>;

export function stream(trackPath: string, secretToken?: string): Promise<Player>;

export interface InitializeOptions {
  client_id: string;
  redirect_uri?: string;
  oauth_token?: string;
}

export interface ConnectOptions {
  client_id: string;
  redirect_uri: string;
  scope?: string;
}

export interface Player {
  play();
  pause();
  seek(time: number);
  currentTime(): number;
  setVolume(volume: number);
  getVolume(): number;
  on(event: string, handler: any);
}
