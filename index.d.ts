import { Promise } from 'es6-promise';

interface SoundCloud {
  initialize(options: SoundCloud.InitializeOptions): void;
  connect(options?: SoundCloud.ConnectOptions): Promise<any>;

  get(path: string, params?: any): Promise<any>;
  post(path: string, params?: any): Promise<any>;
  put(path: string, params?: any): Promise<any>;
  delete(path: string): Promise<any>;

  upload(options: any): Promise<any>;
  resolve(url: string): Promise<any>;
  oEmbed(url: string, params?: any): Promise<any>;

  stream(trackPath: string, secretToken?: string): Promise<SoundCloud.Player>;
}

declare namespace SoundCloud {
  interface InitializeOptions {
    client_id: string;
    redirect_uri?: string;
    oauth_token?: string;
  }

  interface ConnectOptions {
    client_id: string;
    redirect_uri: string;
    scope?: string;
  }

  interface Player {
    play(): void;
    pause(): void;
    seek(time: number): void;
    currentTime(): number;
    setVolume(volume: number): void;
    getVolume(): number;
    on(event: string, handler: any): void;
  }
}

declare let SoundCloud: SoundCloud;
export = SoundCloud;
