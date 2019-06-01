const Env = use('Env');

export = {
  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'session',

  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */
  session: {
    model: 'App/Models/User',
    password: 'password',
    scheme: 'session',
    serializer: 'lucid',
    uid: 'email',
  },

  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    model: 'App/Models/User',
    password: 'password',
    scheme: 'basic',
    serializer: 'lucid',
    uid: 'email',
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    model: 'App/Models/User',
    options: {
      secret: Env.get('APP_KEY')
    },
    password: 'password',
    scheme: 'jwt',
    serializer: 'lucid',
    uid: 'email',
  }
};
