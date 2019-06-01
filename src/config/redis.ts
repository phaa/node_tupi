export = {
    connection: 'local',

    local: {
        host: '127.0.0.1',
        port: 6379,
        password: 123456,
    },

    slave: {
        host: 'slave.com',
        port: 6379,
        password: 123456,
    }
}