import Order from '../models/order.js';

const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user,
  } = req.body;

  if (!orderItems || !orderItems.length) {
    res.status(400);
    throw new Error('no order items');
  }

  const order = new Order({
    orderItems,
    user: user._id,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
};

// eslint-disable-next-line import/prefer-default-export
export { addOrderItems };
