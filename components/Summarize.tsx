import Image from "next/image";
import About from "./About";
import Skill from "./Skill";
import Works from "./Works";
const Summarize = () => {
  return (
    <div>
      <Works />
      <Skill />
      <About />
    </div>
  );
};

export default Summarize;
