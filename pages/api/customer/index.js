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

  switch (req.method) {
    case 'POST':
      const data = req.body.data;
      if (data.name && data.lastName && data.email) {
        try {
          const customer = await Customer.create({ ...data });
          res.status(201).json({
            status: 'success',
            message: 'user created',
            data: customer,
          });
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .json({ status: 'failed', message: 'failed to create customer' });
        }
      } else {
        return res
          .status(400)
          .json({ status: 'failed', message: 'Bad customer credential' });
        s;
      }
  }
}
