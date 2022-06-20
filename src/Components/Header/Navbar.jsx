import React from 'react';
import logoWhite from '../../Assets/img/logo_white.png'

const Navbar = () => {
    return (
        <div className='w-full bg-[#00102E] py-6'>
            <nav className='md:container !w-[1170px] mx-auto flex' >
                <div className='w-2/3'>
                    <img
                        alt="..."
                        className="h-[30px]"
                        src={logoWhite}
                    />
                </div>
                <div className='w-1/3 absolute right-0 text-white flex my-1'>
                    Support : +1454544544
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
