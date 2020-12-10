import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('password'),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@test.com',
    password: bcrypt.hashSync('password'),
  },
  {
    name: 'Jane Doe',
    email: 'janen@test.com',
    password: bcrypt.hashSync('password'),
  },
];

export default users;
