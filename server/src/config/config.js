module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker', // either environment variable DB_NAME or 'tabtracker'
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite', // what type of db we are connecting to
            host: process.env.HOST || 'localhost', // the location of the db
            storage: './tabtracker.sqlite', // where to store our sqlite files
            operatorsAliases: false // NOT TO GET WARNING "sequelize depreciated String based operators are now deprecated.
                                    // Please use Symbol based operators for better security" (? LEARN ABOUT THIS ?)
        }
    }
}