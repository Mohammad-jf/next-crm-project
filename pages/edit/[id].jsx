import EditCustomerPage from '@/components/template/EditCustomerPage'
import { useRouter } from 'next/router'

const Customer = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>
            <EditCustomerPage id={id} />
        </div>
    )
}

export default Customer