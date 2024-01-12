const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
MongoClient.connect(
    'mongodb+srv://mostafaashraf334:WYcZ6tE22UmPdt55@cluster0.s8regf6.mongodb.net/shop?retryWrites=true&w=majority',
    )
.then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
})
.catch(err => {
    console.log(err);
    throw err;
});
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found !';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;