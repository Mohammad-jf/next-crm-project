import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default async function handler(req, res) {
  try {
    await connectDb();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'failed', message: 'DB connection failed' });
    return;
  }

  const { id } = req.query;

  switch (req.method) {
    case 'DELETE':
      try {
        // await Customer.deleteOne(id);
        await Customer.findOneAndDelete({ _id: id });
        res.status(200).json({
          status: 'success',
          message: 'customer deleted',
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ status: 'failed', message: 'failed to delete customer' });
      }
      break;

    case 'PATCH':
      const { data } = req.body;
      try {
        const customer = await Customer.findById(id);
        if (customer) {
          customer.name = data.name;
          customer.lastName = data.lastName;
          customer.email = data.email;
          customer.phoneNumber = data.phoneNumber;
          customer.address = data.address;
          customer.postalCode = data.postalCode;
          customer.date = data.date;
          customer.products = data.products;
          customer.updatedAt = Date.now();
          await customer.save();
        }
        res.status(200).json({
          status: 'success',
          message: 'customer update',
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ status: 'failed', message: 'failed to update customer' });
      }
      break;

    case 'GET':
      try {
        const customer = await Customer.findById(id);
        if (customer) {
          res.status(200).json({
            status: 'success',
            data: customer,
          });
        }
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ status: 'failed', message: 'failed to find customer' });
      }
      break;
  }
}
