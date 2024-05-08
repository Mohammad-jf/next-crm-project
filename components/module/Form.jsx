import FormInput from "./FormInput"
import ItemList from "./ItemList";

const Form = ({ formData, setFormData }) => {

    const formDataHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <FormInput name='name' value={formData.name} label='name' type='text' onChange={formDataHandler} />
            <FormInput name='lastName' value={formData.lastName} label='lastName' type='text' onChange={formDataHandler} />
            <FormInput name='email' value={formData.email} label='email' type='text' onChange={formDataHandler} />
            <FormInput name='phoneNumber' value={formData.phoneNumber} label='phoneNumber' type='text' onChange={formDataHandler} />
            <FormInput name='address' value={formData.address} label='address' type='text' onChange={formDataHandler} />
            <FormInput name='postalCode' value={formData.postalCode} label='postalCode' type='text' onChange={formDataHandler} />
            <FormInput name='date' value={formData.date} label='date' type='date' onChange={formDataHandler} />
            <ItemList formData={formData} setFormData={setFormData} />
        </div>
    )
}

export default Form
