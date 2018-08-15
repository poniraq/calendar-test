import * as tunnel from 'global-tunnel-ng';
import * as proxy from 'utils/proxy';

if (proxy.enabled) {
  tunnel.initialize({
    host: proxy.host,
    port: proxy.port
  });
  console.log(`Tunneling through ${proxy.host}:${proxy.port}`);
}