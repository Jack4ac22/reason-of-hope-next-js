import fs from "fs";
import path from "path";

// Get all objections and return them as an array of objects
export async function getAllObjections() {
  const files = fs.readdirSync(path.join(cwd(), "content/objections"));
  console.log(files);
  const objections = files.map((filename) => {
    const filePath = path.join(process.cwd(), "objections", filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data;
  });
  return objections;
}
