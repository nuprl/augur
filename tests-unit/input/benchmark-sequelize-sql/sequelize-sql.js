done = function done(){
    console.log("Done!");
};

var payload = " 0; SELECT NOW();";

function dummySource(val){
    payload += val;
}

dummySource(' ');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'tester', 'passwd', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});

sequelize.authenticate();
/*sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });*/

const Tabs = sequelize.define('tabs', {
    num: Sequelize.INTEGER
});

Tabs.findAll({
    limit: payload,
    raw: true
    });/*
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error("Err: " + err);
    });*/

done();
