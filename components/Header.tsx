import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white h-20 flex shadow-md mb-10">
      <div className="flex-1"></div>
      <div className="flex-1 flex items-center justify-center">
        <Link href="/">
          <a>
            <h2 className="Chango">KandaPort</h2>
          </a>
        </Link>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Header;
