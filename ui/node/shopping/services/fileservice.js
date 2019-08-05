const fs = require('fs');

let fileName = 'fish.txt';
//to read the file
const readFile = (getData)=>{
    fs.readFile(fileName,(err,line)=>{
        getData(line);
        console.log(line.toString());
    });
}

const getFileData = () =>{
    let data ='FILE: ';
    readFile((line)=>{
        data += line;
        //console.log(data);
    });
}
getFileData();
//to rename a file
// const renameFile = (newName)=>{
//     fs.rename(fileName,newName,(err)=>{
//         if(err){
//             console.error(err);
//             console.log('Error ');
//         }
//     });
// }

// renameFile('fish.txt');
// const writeFile = (data)=>{
//     fs.writeFile(fileName,data,(err)=>{
//         if(err){
//             console.error(err);
//             console.log('Error ');
//         }
//     })
// }

// writeFile('\nThank You for using Node');

const appendFile = (data) =>{
    fs.appendFile(fileName,data,(err)=>{
        if(err){
            console.error(err);
            console.log('Error ');
        }
    })
}

appendFile('\nGood to Know');

const deleteFile = ()=>{
    fs.unlink(fileName,(err)=>{
        if(err){
            console.error(err);
            console.log('Error ');
        }
    });
}


