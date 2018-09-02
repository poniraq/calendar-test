const ENV_HOST: string = process.env.PROXY_HOST;
const ENV_PORT: string = process.env.PROXY_PORT;

export const enabled: boolean = !!(ENV_HOST && ENV_PORT);
export const host = enabled ? ENV_HOST : undefined;
export const port = enabled ? parseInt(ENV_PORT, 10) : undefined;
