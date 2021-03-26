import path from "path";
import fs from "fs";
const postsDirectory = path.join(process.cwd(), "public/skill");

// export function getSkillName() {
//     const fileNames = fs.readdirSync(postsDirectory);
//     return fileNames.map((fileName) => {
//       return  fileName.replace(/\.svg$/, "")
      
//     });
//   }