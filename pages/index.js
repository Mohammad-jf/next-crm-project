import HomePage from '@/components/template/HomePage';
import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default function Home({ customers }) {
  return (
    <>
      <HomePage customers={customers} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    await connectDb();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
