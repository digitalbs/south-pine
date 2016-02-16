'use strict';

let routes = [];
let Staff = require('../../models/staff');

routes.push({
  method: 'GET',
  path: '/staff',
  handler (req, reply) {
    Staff.find((err, staff) => {
      if (err) reply(err);

      reply(staff);
    });
  }
});

routes.push({
  method: 'GET',
  path: '/staff/{id}',
  handler (req, reply) {
    let staffMemberId = req.params.id;

    Staff.findOne({
      'id': staffMemberId
    }, (err, staff) => {
      if (err) reply(err);

      reply(staff);
    });
  }
});

routes.push({
  method: 'POST',
  path: '/staff',
  handler (req, reply) {
    let reqPayload = req.payload;
    let staff = new Staff({
      name: reqPayload.name,
      about: reqPayload.about,
      image: reqPayload.image
    });

    staff.save((err, response) => {
      console.log(err);
      if (err) reply(err);

      reply(response);
    });
  }
});

routes.push({
  method: 'DELETE',
  path: '/staff/{id}',
  handler (req, reply) {
    let staffMemberId = req.params.id;

    Staff.remove({
      id: staffMemberId
    }, err => {
      if (err) reply(err);

      reply('Staff member has been removed').code(204);
    });
  }
});
module.exports = routes;
