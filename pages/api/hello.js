import connectDb from '@/utils/connectDb';

export default async function handler(req, res) {
  try {
    await connectDb();
  } catch (err) {
    console.log(err);
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: 'hello' });
  }
}
