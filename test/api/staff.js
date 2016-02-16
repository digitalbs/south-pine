'use strict';

let Lab = require('lab');
let Code = require('code');
let Hapi = require('hapi');
let lab = exports.lab = Lab.script();
let experiment = lab.experiment;
let test = lab.test;
let beforeEach = lab.beforeEach;
let expect = Code.expect;
let server = require('../../server');

experiment('Endpoint: Staff', () => {

  test('it returns an array of staff objects on GET', done => {
    server.inject({
      method: 'GET',
      url: '/staff'
    }, response => {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.result).to.be.an.array();

      done();
    });
  });

  test('it returns the correct staff object when there is a POST', done => {
    server.inject({
      method: 'POST',
      url: '/staff',
      payload: {
        firstName: 'Brian',
        lastName: 'Schneider',
        about: 'I like stuff',
        dtHired: new Date()
      }
    }, response => {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.result).to.be.an.object();
      Code.expect(response.result.id).to.not.be.null();

      done();
    });
  });

  test('it returns a staff object on GET', done => {
    server.inject({
      method: 'GET',
      url: '/staff/schneider'
    }, response => {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.result).to.be.an.object();

      done();
    });
  });

  test('it returns the correct staff object when there is a PUT', done => {
    server.inject({
      method: 'PUT',
      url: '/staff/schneider'
    }, response => {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.result).to.be.an.object();

      done();
    });
  });

  test('it returns the correct staff object when there is a PATCH', done => {
    server.inject({
      method: 'PATCH',
      url: '/staff/schneider'
    }, response => {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.result).to.be.an.object();

      done();
    });
  });

  test('it returns code status 204 when deleted', done => {
    server.inject({
      method: 'DELETE',
      url: '/staff/schneider'
    }, response => {
      Code.expect(response.statusCode).to.equal(204);
      Code.expect(response.result).to.be.null();

      done();
    });
  });
});
