import logo from '../assets/logo.svg';
import fb from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';
import instagram from '../assets/icon-instagram.svg';
export default function Footer(){
    return (
        <footer id="footer" className="bg-black">

            <div className="container max-w-6xl mx-auto py-10">

                <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                        <div className="h-8">
                            <img src={logo} alt="logo" className='w-44 md:ml-3' />
                        </div>
                        <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                            <div className="h-10 group">
                                <a href="#">About</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Careers</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Events</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Products</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Support</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Social */}

                    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end">
                            <div className="h-8 group">
                                <img src={fb} alt="" />
                            </div>
                            <div className="h-8 group">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="h-8 group">
                                <img src={pinterest} alt="" />
                            </div>
                            <div className="h-8 group">
                                <img src={instagram} alt="" />
                            </div>
                        </div>

                        <div className="font-bold">
                            &copy; 2024 Loopstudio. All Right Reserved.
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}