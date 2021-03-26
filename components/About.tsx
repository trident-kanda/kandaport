const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 mb-10">
      <div className="mb-6">
        <h2 className="Chango text-center mb-10">About</h2>
        <div className="sm:p-10 sm:bg-gray-100 sm:rounded-lg sm:shadow-md flex justify-center">
          <div className="text-base lg:text-xl">
            <p className="mb-2">
              <span className="font-bold mr-2">名前:</span>神田 佑樹
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">学校:</span>
              トライデントコンピュータ専門学校
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">学科:</span>
              高度情報学科
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">年齢:</span>
              20歳
            </p>
            <p className="">
              <span className="font-bold mr-2">Email:</span>
              <a href=" mailto:tridentkandayuki@gmail.com">
                tridentkandayuki@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
