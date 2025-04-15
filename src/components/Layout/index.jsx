
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const index = ({children}) => {
    return (
        <div>
            <Navbar />
            <Outlet/>
            {children}
            <Footer />
        </div>
    )
}

export default index