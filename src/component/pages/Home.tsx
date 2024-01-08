import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import Earings from "../../assets/earings.jpg"
import D1 from "../../assets/f1.jpg"
import D3 from "../../assets/f3.jpg"
import D4 from "../../assets/f4.jpg"

const Home:React.FC = () => {
  return (
    <div className='bg-[#f2eaea] text-[black] items-center flex justify-center flex-col w-screen min-h-screen pl-10 pr-10'>
        <div className='flex items-center justify-center '>
            <div className='h-[400px] w-[500px] bg-[#e7e1e1] p-5 flex gap-[30px] flex-col justify-center text-[50px]'>
                <div className=''>
                    <h2 className='text-[30px] text-left leading-10'>
                        Mixed Pieces 
                        <p>Earings</p>
                    </h2>
              
                </div>
               
              
            
                        <p className='text-[15px] text-[#b6acac]'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit voluptatum, 
                            explicabo a soluta odio veniam quibusdam. Voluptatum accusantium eos voluptatibus quidem,
                            harum vel, incidunt at quibusdam repellat voluptate nihil.
                        </p>

                
              
                
                   

                <div className='flex '>
                <h3 className='text-[18px]'>
                            EXPLORE NOW
                            
                        </h3>
                        <div className='text-[black] text-[20px] flex items-center'>
                          <MdNavigateNext />
                        </div>

                </div>
               
            </div>
            <div className='h-[400px] w-[500px]'>
                <div className='h-[400px] w-[500px]'>
                    <img className='w-[100%] h-[100%]'
                     src={Earings} alt="" />

                </div>

            </div>

        </div>


        <div className=' flex-col justify-center items-center gap-10'>
            <div className='text-center '>
              <h2 className='text-[30px]'>Customer's Favorite</h2>
            </div>

            <div className='flex gap-10 items-center justify-around'>
                <div>
                    <div className='h-[200px] w-[200px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D1} alt="" />
                    </div>
                    <div className='text-center'>
                    <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                    <span className='text-[grey] text-[15px]'>$220.49</span>
                    </div>
                    
                </div>
                

                <div>
                    <div className='h-[200px] w-[200px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D3} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span>
                        </div>
                    
                </div>
               
                <div>
                    <div className='h-[200px] w-[200px]'>
                        <img className='w-[100%] h-[100%]'
                            src={Earings} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span>
                        </div>
                    
                </div>


               <div>
                    <div className='h-[200px] w-[200px]'>
                        <img className='w-[100%] h-[100%]'
                            src={D4} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[black] text-[15px]'>Rings With Rare Gem</h3>
                        <span className='text-[grey] text-[15px]'>$220.49</span>
                        </div>
                    
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Home