import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import {BsCashCoin} from 'react-icons/bs'
import {GiPathDistance} from 'react-icons/gi'

//Imported Images ==>
import asianFood from '../../Assets/asianFood.png'
import barImage from '../../Assets/barImage.png'
import burgerImage from '../../Assets/burgerImage.png'
import coffeImage from '../../Assets/coffeImage.png'
import postreImage from '../../Assets/postreImage.png'
import sushiImage from '../../Assets/sushiImage.png'
import veganImage from '../../Assets/veganImage.png'
import bbqImage from '../../Assets/bbqImage.png'
import completoImage from '../../Assets/completoImage.png'
import fishImage from '../../Assets/fishImage.png'
import pizzaImage from '../../Assets/pizzaImage.png'

//Restaurant Image ==>
import fishRes from '../../Assets/fishRes.webp'
import starcoffe from '../../Assets/starcoffe.webp'
import food from '../../Assets/food.jpg'
import burgerShop from '../../Assets/burgerShop.jpg'

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8'>
      {/*Top Section */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center border-b-2 pb-2 basis-1/2 gap-2'>
          <BiSearchAlt className='text-hoverColor text-[20px] cursor-pointer'/>
          <input type="text" placeholder='Search your favourite' className='border-none outline-none placeholder:text-sm focus:outline-none'/>
        </div>

        <div className='flex gap-4 items-center'>
          <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-all' />
          <button className='bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py-2 px-4 rounded-[5px] hover:bg-[#55545e] transition-all'>Go Premium</button>
        </div>

      </div>

      {/*Title Div */}
      <div className='flex items-center justify-between mt-8'>
        <div className="title">
          <h1 className='text-[35px] text-titleColor tracking-[1px] font-black'>
            Find the best place
          </h1>
          <span className='text-[16px] opacity-70'><strong>249 Restaurants,</strong> choose yours</span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='specials px-4 text-center border-r-2'>
            <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
            <small className='text-[16px] opacity-70'>Specials</small>
          </div>

          <div className='deliveries px-4 text-center border-r-2'>
            <h3 className='text-[20px] font-bold text-titleColor'>+90</h3>
            <small className='text-[16px] opacity-70'>Deliveries</small>
          </div>

        </div>

      </div>

      {/*Categories Div */}
      <div className='flex mt-8 items-center gap-10'>
        <div className='singleCategory grid items-center justify-between text-center'>
          
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={pizzaImage} alt='Food Image' className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Italian
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={asianFood} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Asian
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={barImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Bar
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={burgerImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Burgers
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={coffeImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Coffes
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={postreImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Dessert
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={sushiImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Sushi
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={veganImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Vegan
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={bbqImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            BBQ
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={completoImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            HotDog
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={fishImage} alt="Food Image" className='w-[70%] flex justify-center m-auto'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Fish
          </span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
            <BsPlusCircleFill className='text-center flex justify-center m-auto text-[20px] hover:scale-[1.5] transition-all cursor-pointer'/>
          </div>

          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            More
          </span>
        </div>

      </div>

      {/*Restaurants Sections */}
      <div className='restaurant mt-8'>

        <div className='flex items-center justify-between'>
          <div className='title'>
            <h1 className='text-[25px] text-titleColor font-bold'>New Restaurants</h1>
            <span className='text-[16px] opacity-70'><strong>6 restaurants,</strong> have been opened up in town</span>
          </div>

          <button className='flex align-center gap-2cursor-pointer text-titleColor font-semibold 
          py-2 px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all'>
            View All <BsArrowRightShort className='text-[20px]'/>
          </button>
        </div>

        <div className='restaurantContainer py-8 flex justify-between items-center'>

          <div className='singleRestaurant w-[220px] bg-[#bba8ff] p-3 rounded-[10px]'>
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={food} alt='food' className='w-full h-full object-cover'/>
            </div>
            <h1 className=' restName block text-center font-bold opacity-90 pt-4'>Night Ulif</h1>
            <small className='block text-center text-[#606060] font-medium'>Vegan restaurant</small>
             
            <div className=' info mt-5 flex justify-center items-center'>
              <div className='singleInfo grid px-3'>
                <BsStarFill className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>3.7</h4>
              </div>

              <div className='singleInfo border-x-2 grid px-3'>
                <BsCashCoin className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>50</h4>
              </div>

              <div className='singleInfo grid px-3'>
                <GiPathDistance className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>0.7</h4>
              </div>
            </div>
             
          </div>

          <div className='singleRestaurant w-[220px] bg-[#bba8ff] p-3 rounded-[10px]'>
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={starcoffe} alt='food' className='w-full h-full object-cover'/>
            </div>
            <h1 className=' restName block text-center font-bold opacity-90 pt-4'>Starbucks</h1>
            <small className='block text-center text-[#606060] font-medium'>Coffe Shop</small>
             
            <div className=' info mt-5 flex justify-center items-center'>
              <div className='singleInfo grid px-3'>
                <BsStarFill className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>4</h4>
              </div>

              <div className='singleInfo border-x-2 grid px-3'>
                <BsCashCoin className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>37</h4>
              </div>

              <div className='singleInfo grid px-3'>
                <GiPathDistance className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>2.7</h4>
              </div>
            </div>
             
          </div>

          <div className='singleRestaurant w-[220px] bg-[#bba8ff] p-3 rounded-[10px]'>
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={fishRes} alt='food' className='w-full h-full object-cover'/>
            </div>
            <h1 className=' restName block text-center font-bold opacity-90 pt-4'>Happy Fish</h1>
            <small className='block text-center text-[#606060] font-medium'>Sea Food</small>
             
            <div className=' info mt-5 flex justify-center items-center'>
              <div className='singleInfo grid px-3'>
                <BsStarFill className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>4.3</h4>
              </div>

              <div className='singleInfo border-x-2 grid px-3'>
                <BsCashCoin className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>59</h4>
              </div>

              <div className='singleInfo grid px-3'>
                <GiPathDistance className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>4</h4>
              </div>
            </div>
             
          </div>

          <div className='singleRestaurant w-[220px] bg-[#bba8ff] p-3 rounded-[10px]'>
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={burgerShop} alt='food' className='w-full h-full object-cover'/>
            </div>
            <h1 className=' restName block text-center font-bold opacity-90 pt-4'>Elkika Restaurant</h1>
            <small className='block text-center text-[#606060] font-medium'>Sandwichs and Burgers</small>
             
            <div className=' info mt-5 flex justify-center items-center'>
              <div className='singleInfo grid px-3'>
                <BsStarFill className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>5</h4>
              </div>

              <div className='singleInfo border-x-2 grid px-3'>
                <BsCashCoin className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>35</h4>
              </div>

              <div className='singleInfo grid px-3'>
                <GiPathDistance className=' flex mt-auto justify-center items-center'/>
                <h4 className=' font-semibold text-[#4f4d58]'>4.7</h4>
              </div>
            </div>
             
          </div>


        </div>
      </div>
    </div>
  )
}

export default Body