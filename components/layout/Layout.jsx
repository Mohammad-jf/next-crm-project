import Link from "next/link"


const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <h2>My Crm</h2>
                <Link href='add-customer'>Add Customer</Link>
            </header>


            <div className="main">
                {children}
            </div>



            <footer className="footer">
                <a href="https://github.com/mohammad-jf" target="_blank" rel="noreferrer">mohammad-jf</a> &copy;
            </footer>
        </>
    )
}

export default Layout