import { useEffect, useState } from "react"
import Form from "../module/Form";
import { useRouter } from "next/router";


const EditCustomerPage = ({ id }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        postalCode: '',
        date: '',
        products: []
    });

    useEffect(() => {
        async function getCustomer() {
            const res = await fetch(`/api/customer/${id}`);
            const dataObj = await res.json();
            const { data } = dataObj

            if (data) {
                setFormData({ ...formData, ...data })
            }
        }
        getCustomer();
    }, [id]);

    const cancelHandler = () => {
        setFormData(
            {
                name: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: '',
                postalCode: '',
                date: '',
                products: []
            }
        );
        router.push('/');
    }


    const saveHandler = async () => {
        const res = await fetch(`/api/customer/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ data: formData }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 'success') {
            router.push('/')
        }
    }


    return (
        <div className="customer-page">
            <h4>Edit Customer</h4>
            <Form formData={formData} setFormData={setFormData} />
            <div className="customer-page__buttons">
                <button className="first" onClick={cancelHandler}>Cancel</button>
                <button className="second" onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default EditCustomerPage