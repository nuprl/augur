'use strict';

describe('MongooseMask Tests', function () {

    var mongooseMask = require('../index');
    var mockgoose = require('mockgoose');
    var mongoose = require('mongoose');
    mockgoose(mongoose);
    mongoose.createConnection('mongodb://localhost:3001/TestingDB');
    var Model = require('./Model')(mongoose);
    var ModelNested = require('./ModelNested')(mongoose, Model);

    var request = require('supertest');
    var express = require('express');
    var _ = require('lodash');

    var baseModel;
    beforeEach(function (done) {
        mockgoose.reset();
        Model.create({publicField: 'Hello', privateField: 'World'},
            {publicField: 'Hello', privateField: 'World'}, function (err, result) {
                baseModel = result;
                expect(result).not.toBeNull();
                if (result) {
                    expect(result.publicField).toBe('Hello');
                    expect(result.privateField).toBe('World');
                }
                done(err);
            });
    });

    afterEach(function (done) {
        //Reset the database after every test.
        mockgoose.reset();
        done();
    });

    describe('SHOULD', function () {

        it('Be able to acquire index', function () {
            var test = require('../index');
            expect(test).not.toBeNull();
        });

        it('Return all fields when no mask applied middleware', function (done) {
            var app = express();
            app.get('/model', function (req, res) {
                Model.findOne({}, function (err, result) {
                    res.json(result);
                });
            });

            request(app)
                .get('/model')
                .end(function (err, result) {
                    expect(result).not.toBeNull();
                    if (result) {
                        expect(result.body._id).toBeDefined();
                        expect(result.body.publicField).toBe('Hello');
                        expect(result.body.privateField).toBe('World');
                    }
                    done(err);
                });
        });

        it('Return all fields if no mask applied', function (done) {
            Model.findOne({}, function (err, result) {
                expect(result._id).toBeDefined();
                expect(result.publicField).toBe('Hello');
                expect(result.privateField).toBe('World');
                done(err);
            });
        });

        it('Mask all items in an array', function (done) {
            Model.find({}, function (err, results) {
                results = mongooseMask.mask(results, ['_id', 'privateField']);
                expect(results.length).toBe(2);
                _.each(results, function (result) {
                    expect(result._id).toBeUndefined();
                    expect(result.publicField).toBe('Hello');
                    expect(result.privateField).toBeUndefined();
                });
                done(err);
            });
        });

        it('Mask fields if mask applied', function (done) {
            Model.findOne({}, function (err, result) {
                result = mongooseMask.mask(result, ['_id', 'privateField']);
                expect(result._id).toBeUndefined();
                expect(result.publicField).toBe('Hello');
                expect(result.privateField).toBeUndefined();
                done(err);
            });
        });

        it('Be able to expose explicit fields', function (done) {
            Model.findOne({}, function (err, result) {
                result = mongooseMask.expose(result, ['_id', 'privateField']);
                expect(result._id).toBeDefined();
                expect(result.publicField).toBeUndefined();
                expect(result.privateField).toBeDefined();
                done(err);
            });
        });

        it('Be able to expose explicit fields on array', function (done) {
            Model.find({}, function (err, results) {
                results = mongooseMask.expose(results, ['_id', 'privateField']);
                expect(results.length).toBe(2);
                _.each(results, function (result) {
                    expect(result._id).toBeDefined();
                    expect(result.publicField).toBeUndefined();
                    expect(result.privateField).toBeDefined();
                });
                done(err);
            });
        });

        it('Be able to rename exposed fields', function (done) {
            Model.findOne({}, function (err, result) {
                result = mongooseMask.expose(result, [
                    {'_id': 'banana'},
                    'privateField'
                ]);
                expect(result._id).toBeUndefined();
                expect(result.banana).toBeDefined();
                expect(result.publicField).toBeUndefined();
                expect(result.privateField).toBeDefined();
                done(err);
            });
        });

        it('Be able to pass a callback to the mask middleware for complex data', function (done) {
            ModelNested.create({
                publicField: 'public',
                privateField: 'private',
                data: {
                    publicField: 'public',
                    privateField: 'private' },
                nestedDoc: [
                    {
                        publicField: 'public',
                        privateField: 'private'
                    }
                ]
            }, function (err, result) {
                expect(err).toBeNull();

                var middleware = mongooseMask(function (obj, mask, done) {
                    var masked = mask(obj, ['__v', '_id', 'privateField']);
                    masked.data = mask(obj.data, ['_id', 'privateField']);
                    masked.nestedDoc = mask(obj.nestedDoc, ['_id', 'privateField']);
                    done(null, masked);
                });
                var req = {};
                var response;
                var res = {
                    json: function (data) {
                        response = data;
                        return data;
                    },
                    jsonp: function () {
                    }
                };
                middleware(req, res, function () {
                    res.json(result);
                    expect(response).toEqual(
                        {
                            publicField: 'public',
                            data: { publicField: 'public' },
                            nestedDoc: [
                                { publicField: 'public' }
                            ]
                        }
                    );
                    done();
                });

            });
        });

        it('Be able to expose items on the property chain', function (done) {
            ModelNested.create({
                publicField: 'public',
                privateField: 'private',
                data: {
                    publicField: 'public',
                    privateField: 'private2'
                },
                nestedDoc: [
                    {
                        publicField: 'public',
                        privateField: 'private'
                    }
                ]
            }, function (err, result) {

                var masked = mongooseMask.expose(result, [
                    'publicField',
                    'data.privateField',
                    {'data.publicField': 'data.public'},
                    {'nestedDoc.publicField': 'nested'}
                ]);

                expect(masked.publicField).toBe('public');
                expect(masked.data.privateField).toBe('private2');
                expect(masked.data.public).toBe('public');
                expect(masked.public).toBeUndefined();
                done(err);
            });
        });

        it('Be able to mask items on the property chain', function (done) {
            ModelNested.create({
                publicField: 'public',
                privateField: 'private',
                data: {publicField: 'public',
                    privateField: 'private' },
                nestedDoc: [
                    {
                        publicField: 'public',
                        privateField: 'private'
                    }
                ]
            }, function (err, result) {

                var masked = mongooseMask.mask(result, [
                    'privateField',
                    'data.privateField'
                ]);

                expect(masked.publicField).toBe('public');
                expect(masked.privateField).toBeUndefined();
                expect(masked.data.publicField).toBe('public');
                expect(masked.data.privateField).toBeUndefined();
                done(err);
            });
        });

        it('Fail gracefully if items are not on the property chain by setting them to undefined', function (done) {
            ModelNested.create({
                publicField: 'public',
                privateField: 'private',
                data: {
                    publicField: 'public',
                    privateField: 'private'
                },
                nestedDoc: {
                    publicField: 'public',
                    privateField: 'private'
                }
            }, function (err, result) {

                var masked = mongooseMask.expose(result, [
                    'publicField.something',
                    {'data.publicField.fakeField': 'data.public'},
                    {'nestedDoc.publicField': 'nested'}
                ]);
                console.log('What', masked);
                expect(masked.publicField.something).toBeUndefined();
                expect(masked.data.public).toBeUndefined();
                done(err);
            });
        });

    });

    describe('SHOULD NOT', function () {

        it('Return all fields when mask applied middleware', function (done) {
            var app = express();
            app.use(mongooseMask(['privateField', '_id']));

            app.get('/model', function (req, res) {
                Model.findOne({}, function (err, result) {
                    res.json(result);
                });
            });

            request(app)
                .get('/model')
                .end(function (err, result) {
                    expect(result).not.toBeNull();
                    if (result) {
                        expect(result.body._id).toBeUndefined();
                        expect(result.body.publicField).toBe('Hello');
                        expect(result.body.privateField).toBeUndefined();
                    }
                    done(err);
                });
        });

        it('Throw an error when encountering an undefined/null path value', function (done) {

            ModelNested.create({
                publicField: 'public',
                privateField: 'private',
                data: {
                    publicField: 'public',
                    privateField: 'private2'
                },
                nestedDoc: [
                    {
                        publicField: 'public',
                        privateField: 'private'
                    }
                ]
            }, function (err, result) {

                expect(function () {
                    var masked = mongooseMask.expose(result, [
                        'publicField',
                        'data.privateField',
                        {'data.publicField': 'data.public'},
                        {'nestedDoc.publicField.nested.error': 'nested'}
                    ]);

                    expect(masked.publicField).toBe('public');
                    expect(masked.data.privateField).toBe('private2');
                    expect(masked.data.public).toBe('public');
                    expect(masked.public).toBeUndefined();
                }).not.toThrow();
                done(err);
            });
        });

    });
});