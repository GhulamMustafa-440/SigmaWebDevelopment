import path from "path"

let myPath = "e:\\SigmaWebDevelopmentCourse\\Node.js\\Tutorial # 03\\harry.txt"

console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("e:/", "programs\\harry.txt"))