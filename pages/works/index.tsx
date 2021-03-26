import Header from "../../components/Header";
import Image from "next/image";
import workList from "../../lib/works";
import Head from "next/head";
const works = () => {
  return (
    <div>
      <Head>
        <title>KandaPort | works</title>
      </Head>
      <Header />
      <div className="px-2  mb-10 max-w-7xl mx-auto sm:px-6 lg:px-20">
        <div className="bg-white rounded-lg shadow-md p-10 mb-10">
          <h2 className="Chango text-center mb-10">Works</h2>
          <div className="bg-gray-100"></div>
          {workList.map(
            ({ title, frontskill, backskill, url, Description }, number) => {
              return (
                <div
                  key={number}
                  className="sm:p-10 sm:bg-gray-100 sm:rounded-lg sm:shadow-md pic:px-32 mb-28"
                >
                  <div className="mb-5">
                    <h3 className="text-center text-3xl font-bold">{title}</h3>
                  </div>
                  <div className="img_border">
                    <Image
                      src={`/works/${title}.png`}
                      alt={title}
                      width={800}
                      height={450}
                    ></Image>
                  </div>
                  <div>
                    <h3 className="my-5 text-center text-3xl font-bold ">
                      フロントエンド
                    </h3>
                    <div className="flex flex-wrap justify-center">
                      {frontskill.map((skill, number) => {
                        return (
                          <div
                            className=" w-1/3 p-5 md:w-1/4 lg:w-1/5"
                            key={number}
                          >
                            <Image
                              src={`/skill/${skill}.svg`}
                              width="200"
                              height="200"
                            ></Image>
                            <p className="text-center font-bold none hidden sm:block">
                              {skill}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="my-5 text-center text-3xl font-bold">
                      バックエンド
                    </h3>
                    <div className="flex flex-wrap justify-center">
                      {backskill.map((skill, number) => {
                        return (
                          <div
                            className=" w-1/3 p-5 md:w-1/4 lg:w-1/5 "
                            key={number}
                          >
                            <Image
                              src={`/skill/${skill}.svg`}
                              width="200"
                              height="200"
                            ></Image>
                            <p className="text-center font-bold none hidden sm:block">
                              {skill}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="my-5 text-center text-3xl font-bold">
                      概要
                    </h3>
                    <p>{Description}</p>
                    <br />
                    <div className="text-center">
                      <a href={url} rel="nofollow">
                        <div className=" inline link">
                          <p className="font-extrabold inline text-lg  cursor-pointer  ">
                            Webサイトへ
                          </p>
                          <div className="inline-block">
                            <div className="inline arrow_right"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default works;
