import Slick from "./Slick";
import ArrowLink from "./ArrowLink";
const Works = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 mb-10">
      <div className="mb-6">
        <h2 className="Chango text-center mb-10">Works</h2>
        <div className="sm:p-10 sm:bg-gray-100 sm:rounded-lg sm:shadow-md">
          <div className="w-100% lg:w-4/5 mx-auto mb-16">
            <Slick />
          </div>
          <ArrowLink link={"/works"} word={"詳細"} internal={true} />
        </div>
      </div>
    </div>
  );
};

export default Works;
