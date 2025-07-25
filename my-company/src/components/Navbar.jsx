import {Link, Outlet} from 'react-router-dom';

function Navbar() {
    return (
        <>
        <div style={{display: 'flex', justifyContent: "space-between", maxWidth: "780px"}}>
            <Link to="/">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact</Link>
        </div>
        
        <Outlet />
        </>
    )
}

export default Navbar