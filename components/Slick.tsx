import Slider from "react-slick";
import Image from "next/image";
import workList from "../lib/works";
const Slick = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...setting} className="border-4 border-gray-200 rounded-md">
      {workList.map(({ title }, number) => {
        return (
          <div key={number} className="">
            <Image
              src={`/works/${title}.png`}
              alt={title}
              width={800}
              height={450}
            ></Image>
          </div>
        );
      })}
    </Slider>
  );
};

export default Slick;
