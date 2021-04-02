import Link from "next/link";
type props = {
  link: string;
  word: string;
  internal: boolean;
};
const ArrowLink = ({ link, word, internal }: props) => {
  return (
    <div className=" text-center mt-5">
      {internal === true && (
        <Link href={link}>
          <a>
            <div className=" inline link">
              <p className="font-extrabold inline text-lg  cursor-pointer  ">
                {word}
              </p>
              <div className="inline-block">
                <div className="inline arrow_right"></div>
              </div>
            </div>
          </a>
        </Link>
      )}
      {internal === false && (
        <a href={link} rel="nofollow" target="_blank">
          <div className=" inline link">
            <p className="font-extrabold inline text-lg  cursor-pointer  ">
              {word}
            </p>
            <div className="inline-block">
              <div className="inline arrow_right"></div>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default ArrowLink;
