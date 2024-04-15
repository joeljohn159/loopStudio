import { useState } from 'react';
import logo from '../assets/logo.svg'
export default function Hero(){
    const [toggle, setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle)
    }
    return (
        <section id="hero">
            {/* Main Container */}
            <div className="container max-w-6xl mx-auto px-6 py-12">
                {/* Logo Nav Container */}
                <nav className="flex items-center justify-between font-bold text-white">
                    {/* Logo */}
                    <img src={logo} alt="" />
                    {/* Menu */}
                    <div className="hidden h-10 font-alata md:flex md:space-x-8">
                        <div className="group">
                            <a href="#">About</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>


                        <div className="group">
                            <a href="#">Careers</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="group">
                            <a href="#">Events</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="group">
                            <a href="#">Products</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>  

                        <div className="group">
                            <a href="#">Support</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                    </div>
                    
                    <div className="    ">
                        <button onClick={handleToggle} id="menu-btn" type='button' className={toggle ? "open z-40 block hamburger focus:outline-none": " z-40 block hamburger md:hidden focus:outline-none"}>
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>

                    <div id="menu" className={toggle ? 'absolute left-0 right-0 top-0 bottom-0 bg-black min-h-screen flex flex-col py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase': 'hidden'}>
                        <a href="" className="hover:text-purple-500">About</a>
                        <a href="" className="hover:text-purple-500">Careers</a>
                        <a href="" className="hover:text-purple-500">Events</a>
                        <a href="" className="hover:text-purple-500">Products</a>
                        <a href="" className="hover:text-purple-500">Support</a>
                    </div>


                </nav>



                {/* Todo */}

                <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white text-center uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
                    IMPRESSIVE EXPERIENCES THAT DELIVER
                </div>
            </div>
        </section>
    )
}

// export default function Hero(){
//     return (
//         <section id="hero">
            
//         </section>
//     )
// }