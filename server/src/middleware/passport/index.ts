import { serializeUser, deserializeUser, use, DoneFunction } from 'passport';
import { User } from 'models';
import { GoogleStrategy } from './google';


use(GoogleStrategy);
serializeUser(function(user: User, done: DoneFunction) {
  const data: UserSerializationData = {
    id: user.id,
    email: user.email
  };

  done(null, data);
});
deserializeUser((obj: UserSerializationData, done: DoneFunction) => {
  User
    .findById(obj.id)
    .then(user => done(null, user))
});

interface UserSerializationData {
  id: number | string;
  email: string;
};

export * from './google'
