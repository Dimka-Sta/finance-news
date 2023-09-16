import { Link, Outlet } from "react-router-dom";


function Header() {

    return (
        <>
            <div className='header'>

                <Link to='/articles' >

                    <div className='header-text'>
                        <span className='header-text-first' >SHARETRADE</span>
                        <span className='header-text-second'>.COM</span>
                    </div>




                </Link>


            </div>
            <Outlet />
        </>
    )
}

export default Header;