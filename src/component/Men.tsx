import {Link} from "react-router-dom"
import { men } from '../data'
const Men = () => {
  return (
    <div>
        <div className=" flex flex-wrap  gap-y-6 justify-center gap-x-6">

{men?.map((prop:any) =>(
 <Link to= {`/detail/${prop?.id}`}>
  <div key={prop.id} className="space-y-3">
    <div className="w-[300px] h-[300px]">
  <img src={prop.image} alt="" className='w-full h-full object-cover'/>
</div>
<div className=" text-center text-[1.2rem] font-semibold">{prop.name}</div>
<div className="text-center font-light text-[1.1rem] text-gray-400">{prop.price}</div>
  </div>
 </Link>

))}

</div>
    </div>
  )
}

export default Men