import { User } from 'models';
import * as refresh from 'passport-oauth2-refresh';

/**
 * Method wrapper that provides automatic token refreshment.
 * The only restriction is tha tthe first argument should always be User
 */
export function RefreshToken(config: { maxRetries?: number } = { maxRetries: 3 }): MethodDecorator {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    const originalMethod: Function = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const user: User = args[0];
      const self = this;
      let retries = 0;

      return (function retry() {
        return originalMethod.apply(self, args)
          .catch((err: any) => {
            if (++retries > config.maxRetries || err.code !== 401) {
              throw err;
            }

            return handleError(err, retry, user);
          });
      })();
    }

    return descriptor;
  };
}

// UTILS
function handleError(err: any, retry: Function, user: User) {
  console.error(err.message, err.stack);
  return refreshUserToken(user)
    .then(() => retry());
}

function refreshUserToken(user: User): Promise<string> {
  return Promise.resolve()
      .then(() => getNewToken(user))
      .then(token => user.update({ accessToken: token }))
      .then(user => user.accessToken);
}

function getNewToken(user: User): Promise<string> {
  return new Promise((resolve) => {
    refresh.requestNewAccessToken(
      user.provider,
      user.refreshToken,
      (err: Error, newToken: string) => {
        if (err) throw err;
        resolve(newToken);
      }
    );
  });
}
