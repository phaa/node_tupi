const Env = use('Env');
const Helpers = use('Helpers');

export = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mysql'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      database: Env.get('DB_DATABASE', 'adonis'),
      host: Env.get('DB_HOST', 'localhost'),
      password: Env.get('DB_PASSWORD', ''),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
    }
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      database: Env.get('DB_DATABASE', 'adonis'),
      host: Env.get('DB_HOST', 'localhost'),
      password: Env.get('DB_PASSWORD', ''),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
    }
  }
};
