import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import Earings from "../../assets/c1-770x770.jpeg"
import D1 from "../../assets/f1.jpg"
import D3 from "../../assets/f3.jpg"
import D4 from "../../assets/j1-300x300.jpeg"
import { Link } from 'react-router-dom';

const Home:React.FC = () => {
  return (
    <div className='bg-white text-[black] items-center flex justify-center flex-col mx-[9rem] py-[3rem] md:mx-[3rem] sm:mx-[2rem] '>
        <div className='flex items-center justify-center bg-[#f4f4f4]  sm:flex-col-reverse '>
            <div className='h-[600px] w-[50%] sm:w-full sm:h-[400px] bg-[#f4f4f4] p-5 flex gap-[30px] flex-col justify-center text-[50px]'>
                <div className=''>
                    <div className='text-[40px] sm:text-[45px] text-left leading-10 font-semibold sm:text-center'>
                        Mixed Pieces 
                        Earings
                    </div>
              
                </div>
                        <p className='text-[15px] text-[#b6acac]'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit voluptatum, 
                            explicabo a soluta odio veniam quibusdam. Voluptatum accusantium eos voluptatibus quidem,
                            harum vel, incidunt at quibusdam repellat voluptate nihil.
                        </p>

                
              
                
                   

                <div className='flex cursor-pointer '>
                <h3 className='text-[18px] '>
                            EXPLORE NOW
                            
                        </h3> 
                      <Link to="cart"><div className='text-[black] text-[20px] flex items-center'>
                          
                          <MdNavigateNext />
                        </div></Link>

                </div>
               
              </div>
              <div className='h-[600px] w-[50%] sm:w-full sm:h-[400px]'>
                  <div className=' '>
                      <img className='w-[100%] h-[100%] object-cover '
                      src={Earings} alt="" />

                  </div>

              </div>

        </div>


        <div className=' flex flex-col justify-center items-center '>
            <div className='text-center text-[2rem] py-3 '>
              Customer's Favorite
            </div>

            <div className='flex gap-10 md:gap-5 md:flex-wrap sm:flex-wrap items-center justify-center cursor-pointer mb-5'>
                <div className='sm:space-y-3'>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D1} alt="" />
                    </div>
                    <div className='text-center'>

                   <Link to="cart"> <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                    
                    <span className='text-[grey] text-[15px]'>$220.49</span> </Link>
                    </div> 
                    
                </div>
                

                <div className='sm:space-y-3'>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D3} alt="" />
                    </div>
                    <div className='text-center'>

                        <Link to="cart"><h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span></Link>
                        </div>
                    
                </div>
               
                <div className='sm:space-y-3'>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={Earings} alt="" />
                    </div>
                    <div className='text-center'>
                    <Link to="cart"> <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span></Link>
                        </div>
                    
                </div>


               <div className='sm:space-y-3'>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D4} alt="" />
                    </div>
                    <div className='text-center'>
                    <Link to="cart">
                        <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span></Link>
                        </div>
                    
                </div>
            </div>
           
        </div>

        <div className='w-[100%] h-[200px] bg-[#ebebeb] p-10 sm:px-8 flex justify-between items-center sm:flex-wrap sm:h-full sm:space-y-4'>
          <div>
            <h2 className='text-[35px] sm:text-center'>
              Get Discount 20% Off
            </h2>
            <p className='text-[15px] text-[grey] sm:text-center'>Subscribe our newsletter and get discount 20% off</p>
          </div>

          <div className='flex items-center justify-center bg-white '>
                <div className='w-[250px] h-[40px] border-2 border-[#efefef] flex items-center gap-5 p-2 sm:w-full'>
          
                 <input name="Email" type="Email" placeholder='Email Address' />

                </div>
                <button className='w-[120px] h-[40px] bg-red-600 text-white'>Search</button>
          </div>

        </div>
      
    </div>
  )
}

export default Home