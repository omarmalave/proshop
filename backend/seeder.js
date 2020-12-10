import dotenv from 'dotenv';
import connectDb from './src/config/db.js';
import Order from './src/models/order.js';
import Product from './src/models/product.js';
import User from './src/models/user.js';
import users from './src/mocks/users.js';
import products from './src/mocks/products.js';
import log from './src/config/log.js';

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    log.info('Data imported!');
    process.exit();
  } catch (error) {
    log.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    log.info('Data destroyed!');
    process.exit();
  } catch (error) {
    log.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
