import Slick from "./Slick";
import Link from "next/link";
const Works = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 mb-10">
      <div className="mb-6">
        <h2 className="Chango text-center mb-10">Works</h2>
        <div className="sm:p-10 sm:bg-gray-100 sm:rounded-lg sm:shadow-md">
          <div className="w-100% lg:w-4/5 mx-auto mb-16">
            <Slick />
          </div>
          <div className=" text-center">
            <Link href="/works">
              <a>
                <div className=" inline link">
                  <p className="font-extrabold inline text-lg  cursor-pointer  ">
                    詳細
                  </p>
                  <div className="inline-block">
                    <div className="inline arrow_right"></div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
