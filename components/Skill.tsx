import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import skills from "../lib/skills";

const Skill = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 mb-10">
      <div className="mb-6">
        <h2 className="Chango text-center mb-10">Skill</h2>
        <div className="sm:p-10 sm:bg-gray-100 sm:rounded-lg sm:shadow-md">
          <div className="flex flex-wrap justify-center">
            {skills.map((element) => {
              return (
                <div className="w-1/3 p-4 md:w-1/4 lg:w-1/5" key={element}>
                  <div>
                    <Image
                      src={`/skill/${element}.svg`}
                      width="300"
                      height="300"
                    ></Image>
                    <p className="text-center text-base font-bold hidden md:block">
                      {element}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
