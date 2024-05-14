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
  }
}
