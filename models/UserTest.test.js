var mongoose = require('mongoose');
var User = require('./User');
var config = require('../config/aplication');
var expect = require('chai').expect;

mongoose.connect(config.database.getUrl());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

function getUserTest() {
    return new User({
        email : 'teste@teste.com',
        password : '1234567789',
        name : 'User Tester'
    });
}

describe('User Test',function () {
    it("deleted user created", function(done) {
        var user = getUserTest();

        User.remove({email:user.email},function (err) {
            expect(null).to.equal(err);
            done();
        });

    });
    it("no allow duplicate creating", function(done) {
        var user = getUserTest();
        new Promise(function (resolve) {
            user.save(function (err,user) {
                expect(null).to.equal(err);
                expect('teste@teste.com').to.equal(user.email);
                resolve();
            });
        }).then(function () {
            var user = getUserTest();
            user.save(function (err,user) {
                expect(err).to.not.equal(null);
                done();
            });
        }).catch(function (err) {
            expect(err).to.equal(null);

        });
    });
});

