import { NavLink } from "react-router-dom";

const DetailPage = () => {
  return (
    <div className="flex items-center justify-center mb-[20px]">
      <div className="w-[85%] py-[20px] mt-[30px]  bg-gray-300 rounded-[20px] flex justify-around items-center mainDefaultStyle">
        <div className="w-[40%] p-[20px] rounded-[10px]  bg-gray-200 flex justify-center items-center detailImageHolder ">
          <img
            src="https://drfurithemes.com/mrbara15/wp-content/uploads/sites/37/2016/09/b1.jpg"
            alt=""
            className="w-[80%] h-[40%] rounded-[10px] object-cover detailImage"
          />
        </div>

        <div className="w-[48%]   flex items-center justify-center flex-col  detailDetail ">
          <div className="w-[90%] flex  flex-col gap-5 detailInfo">
            <p className="font-semi-bold text-xl text-[#4DC4CC] ">
              Famous Shop Store
            </p>
            <p className="font-bold text-4xl detailInfo1 ">Valeria</p>
            <div className="flex flex-wrap gap-[20px]">
              <p className="font-semi-bold text-grey text-[15px] line-through">
                <span className="text-grey  text-xl ">₦: 71</span>
              </p>
              <p className="font-semi-bold text-grey text-[15px]">
                <span className=" text-[#E5774B]  text-xl ">₦: 200</span>
              </p>
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
              <button className="w-[150px] h-[45px] bg-[#4DC4CC] text-white rounded-[8px] font-bold ">
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
