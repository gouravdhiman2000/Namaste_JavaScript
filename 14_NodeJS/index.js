const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "data.json");

//Sync (Simple , blocks the thread)
// const data = fs.readFileSync(filePath, "utf-8");
// //console.log(data);

// //Async (preferred in real apps)
// fs.readFile(filePath, "utf-8", (err,data)=>{
//     // if(err) throw err;
//     // console.log(JSON.parse(data));
// })

const newData = {
    applications: [
        {
          "id": 1,
          "company": "Google",
          "role": "SWE",
          "status": "applied",
          "appliedDate": "2026-06-01"
        }
    ], 
};

//for write
fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err)=>{
    if(err) throw err;
    console.log("Async write complete");
})