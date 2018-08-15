declare module 'global-tunnel-ng' {
  function initialize(config: TunnelConfig): void;
  function end(): void;

  interface TunnelConfig {
    host: string;
    port: number;
    tunnel?: 'neither' | 'https' | 'both';
    protocol?: 'http:' | 'https:';
    sockets?: number;
  }
}