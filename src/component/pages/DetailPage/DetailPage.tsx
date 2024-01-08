import { NavLink, useParams } from "react-router-dom";
import { alls } from "../../../data";
// import { UseAppDispatch } from "../../../Global/Store";
// import { addToCart } from "../../../Global/ReduxState";
const DetailPage = () => {
 
  // const dispatch = UseAppDispatch();
  const { id } = useParams();
  const itemId = id?parseInt(id, 10): NaN; // Convert id to integer

  const getItemById = (id:number) => {
    return alls.find((item:{ id: number}) => item.id === id);
  };
  console.log(itemId)

  const selectedObject = isNaN(itemId) ? undefined : getItemById(itemId);

  if (!selectedObject) {
    return <div>Item not found</div>;
  }

  console.log(selectedObject)

  return (
    <div className="flex items-center justify-center mb-[20px]">
   
      <div className="w-[85%] py-[20px] mt-[30px]  bg-gray-300 rounded-[20px] flex justify-around items-center mainDefaultStyle">
        <div className="w-[40%] p-[20px] rounded-[10px]  bg-gray-200 flex justify-center items-center detailImageHolder ">
          <img
            src= {selectedObject?.image}
            alt=""
            className="w-[80%] h-[40%] rounded-[10px] object-cover detailImage"
          />
        </div>

        <div className="w-[48%]   flex items-center justify-center flex-col  detailDetail ">
          <div className="w-[90%] flex  flex-col gap-5 detailInfo">
            <p className="font-semi-bold text-xl text-black ">
              
            </p>
            <p className="font-bold text-4xl detailInfo1 ">{selectedObject?.name} </p>
            <div className="flex flex-wrap gap-[20px]">
              <p className="font-semi-bold text-grey text-[15px] line-through">
                <span className="text-grey  text-xl ">{selectedObject?.price}</span>
              </p>
              {/* <p className="font-semi-bold text-grey text-[15px]">
                <span className=" text-[#E5774B]  text-xl ">₦: 200</span>
              </p> */}
            </div>

            <div className="text-[18px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              tempore animi tenetur quasi labore amet? Consequuntur accusamus
              rerum odio fugit?
            </div>
            <p className="font-semi-bold text-xl  text-[#E5774B] ">
              Category :{" "}
              <span className="font-semi-bold text-xl text-[black]">
                Catefo
              </span>
            </p>
          </div>

          <div className="w-[90%]   flex flex-col  justify-center detailFunction mt-[50px]">
            <NavLink to="/cart">
              <button   onClick={() => {
                // dispatch(addToCart(selectedObject));
              }} className="w-[150px] h-[45px] bg-[#4DC4CC] text-white rounded-[8px] font-bold ">
                Add to Cart
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
