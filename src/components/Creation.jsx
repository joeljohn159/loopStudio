import earth1 from '../assets/desktop/image-deep-earth.jpg'
import earth2 from '../assets/mobile/image-deep-earth.jpg'
import night1 from '../assets/desktop/image-night-arcade.jpg'
import night2 from '../assets/mobile/image-night-arcade.jpg'
import soccer1 from '../assets/desktop/image-soccer-team.jpg'
import soccer2 from '../assets/mobile/image-soccer-team.jpg'
import grid1 from '../assets/desktop/image-grid.jpg'
import grid2 from '../assets/mobile/image-grid.jpg'
import above1 from '../assets/desktop/image-from-above.jpg'
import above2 from '../assets/mobile/image-from-above.jpg'
import pocket1 from '../assets/desktop/image-pocket-borealis.jpg'
import pocket2 from '../assets/mobile/image-pocket-borealis.jpg'
import curiosity1 from '../assets/desktop/image-curiosity.jpg'
import curiosity2 from '../assets/mobile/image-curiosity.jpg'
import fisheye1 from '../assets/desktop/image-fisheye.jpg'
import fisheye2 from '../assets/mobile/image-fisheye.jpg'






export default function Creation() {

    const ITEMS1 = [
        {
            Dimg: earth1,
            Mimg: earth2,
            title: 'Deep Earth'
        },
        {
            Dimg: night1,
            Mimg: night2,
            title: 'Night Arcade'
        },
        {
            Dimg: soccer1,
            Mimg: soccer2,
            title: 'Soccer Team VR'
        },
        {
            Dimg: grid1,
            Mimg: grid2,
            title: 'The Grid'
        }
    
    ]

    const ITEMS2 = [
        {
            Dimg: above1,
            Mimg: above2,
            title: 'From Up Above VR'
        },
        {
            Dimg: pocket1,
            Mimg: pocket2,
            title: 'Pocket Borealis'
        },
        {
            Dimg: curiosity1,
            Mimg: curiosity2,
            title: 'The Curiosity'
        },
        {
            Dimg: fisheye1,
            Mimg: fisheye2,
            title: 'Make it Fisheye'
        }
    
    ]
    return (
        <section id=" creation" >
            <div className="container  max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                <div className="flex justify-center mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl md:ml-10">Our Creations</h2>
                    <button className="hidden btn md:block">
                        See All
                    </button>
                </div>

                {/* Items */}
                <div className=" flex flex-col justify-between w-full  space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
                    
                    {ITEMS1.map((item,index) =>  <div key={index} className="group relative overflow-hidden md:w-1/4">
                        <img src={item.Dimg} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"></img>
                        <img src={item.Mimg} alt="" className="w-full md:hidden group-hover:scale-110 duration-200 "></img>

                        <div className="group-hover:duration-600 absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50"></div>
                        <h5 className="absolute px-6 bottom-4 w-52 duration-200 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                            {item.title}
                        </h5>
                    </div> )}
                    
                   
                </div>

                <div className="mt-10 flex flex-col mx-2 justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
                    
                    {ITEMS2.map((item,index) =>  <div key={index} className="group relative overflow-hidden md:w-1/4">
                        <img src={item.Dimg} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"></img>
                        <img src={item.Mimg} alt="" className="w-full md:hidden group-hover:scale-110 duration-200 "></img>

                        <div className="group-hover:duration-600 absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50"></div>
                        <h5 className="absolute px-6 bottom-4 w-52 duration-200 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                            {item.title}
                        </h5>
                    </div> )}
                    
                   
                </div>

                <div className="flex-justify center mt-10 md:hidden">
                    <button className="btn w-full">See all</button>
                </div>

            </div>
        </section>
    )
}