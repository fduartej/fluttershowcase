const app = require('./app');
const { connect } = require('./database')

async function main() {
    //database conection
    await connect();
    //express application
    await app.listen(4000);
    console.log('server on port 4000');
}

main();