import image1 from '../assets/desktop/image-interactive.jpg'

export default function Feature(){
    return (
        <section id="feature">
            <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
                <img src={image1} alt="" />

                <div className="md:bottom-10 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                    <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                        The leader in interactive VR
                    </h2>
                    <p className="max-w-md text-center md:text-left">
                        Founded in 2013, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reiciendis cum eius eligendi nulla maxime distinctio obcaecati officia hic laborum numquam!
                    </p>
                </div>
            </div>
        </section>
    )
}