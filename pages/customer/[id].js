import CustomerDetailsPage from '@/components/template/CustomerDetailsPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CustomerPage = () => {
  const router = useRouter();
  const [customerData, setCustomerData] = useState(null);
  const {
    query: { id },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${id}`)
        .then((res) => res.json())
        .then((data) => setCustomerData(data.data));
    }
  }, [id, isReady]);

  if (customerData) {
    return (
      <div>
        <CustomerDetailsPage customerData={customerData} />
      </div>
    );
  }
};

export default CustomerPage;
