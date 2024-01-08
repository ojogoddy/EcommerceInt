import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import Earings from "../../assets/c1-770x770.jpeg"
import D1 from "../../assets/f1.jpg"
import D3 from "../../assets/f3.jpg"
import D4 from "../../assets/j1-300x300.jpeg"
import { Link } from 'react-router-dom';

const Home:React.FC = () => {
  return (
    <div className='bg-[#ffffff] text-[black] gap-10 items-center flex justify-center flex-col  over  mx-[9rem] py-[3rem] '>
        <div className='flex items-center justify-center bg-[#f4f4f4] '>
            <div className='h-[600px] w-[50%] bg-[#f4f4f4] p-5 flex gap-[30px] flex-col justify-center text-[50px]'>
                <div className=''>
                    <h2 className='text-[40px] text-left leading-10 font-semibold'>
                        Mixed Pieces 
                        <p>Earings</p>
                    </h2>
              
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
              <div className='h-[600px] w-[50%]'>
                  <div className='h-[600px] '>
                      <img className='w-[100%] h-[100%] object-cover '
                      src={Earings} alt="" />

                  </div>

              </div>

        </div>


        <div className=' flex-col justify-center items-center gap-10'>
            <div className='text-center '>
              <h2 className='text-[30px]'>Customer's Favorite</h2>
            </div>

            <div className='flex gap-10 items-center justify-around cursor-pointer'>
                <div>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D1} alt="" />
                    </div>
                    <div className='text-center'>

                   <Link to="cart"> <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                    
                    <span className='text-[grey] text-[15px]'>$220.49</span> </Link>
                    </div> 
                    
                </div>
                

                <div>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D3} alt="" />
                    </div>
                    <div className='text-center'>

                        <Link to="cart"><h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span></Link>
                        </div>
                    
                </div>
               
                <div>
                    <div className='h-[300px] w-[280px]'>
                        <img className='w-[100%] h-[100%]'
                            src={Earings} alt="" />
                    </div>
                    <div className='text-center'>
                    <Link to="cart"> <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span></Link>
                        </div>
                    
                </div>


               <div>
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

        <div className='w-[100%] h-[200px] bg-[#ebebeb] p-10 flex justify-between items-center'>
          <div>
            <h2 className='text-[35px]'>
              Get Discount 20% Off
            </h2>
            <p className='text-[15px] text-[grey]'>Subscribe our newsletter and get discount 20% of</p>
          </div>

          <div className='flex items-center justify-center bg-white'>
                <div className='w-[250px] h-[40px] border-2 border-[#efefef] flex items-center gap-5 p-2'>
          
                 <input name="Email" type="Email" placeholder='Email Address' />

                </div>
                <button className='w-[120px] h-[40px] bg-red-600 text-white'>Search</button>
          </div>

        </div>
      
    </div>
  )
}

export default Home