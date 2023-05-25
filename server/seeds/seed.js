const db = require('../config/connection');
const { Admin } = require('../models');

const adminData = require('./adminData.json');

db.once('open', async () => {
  await Admin.deleteMany({});

  const adminUser = {
    username: 'admin',
    email: 'admin@example.com',
    password: 'password',
  };

  await Admin.create(adminUser);

  console.log('Admin seeded!');
  process.exit(0);
});
