import FormInput from "./FormInput"

const Form = ({ formData, setFormData }) => {

    const formDataHandler = (e) => {
        setFormData({ [e.target.name]: e.target.value, ...formData });
    }
    return (
        <div>
            <FormInput name='name' value={formData.value} label='name' type='text' onChange={formDataHandler} />
            <FormInput name='lastName' value={formData.value} label='lastName' type='text' onChange={formDataHandler} />
            <FormInput name='email' value={formData.value} label='email' type='text' onChange={formDataHandler} />
            <FormInput name='phoneNumber' value={formData.value} label='phoneNumber' type='text' onChange={formDataHandler} />
            <FormInput name='address' value={formData.value} label='address' type='text' onChange={formDataHandler} />
            <FormInput name='postalCode' value={formData.value} label='postalCode' type='text' onChange={formDataHandler} />
            <FormInput name='date' value={formData.value} label='date' type='date' onChange={formDataHandler} />
        </div>
    )
}

export default Form
