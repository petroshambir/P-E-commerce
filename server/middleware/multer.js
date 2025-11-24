
import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})


// const storage =multer.diskStorage({
//     destination:function(req,file,callback){
//         callback(null,'list/')
//     },
//     filename:function(req,file,callback){
//         const uName =Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
//         callback(null,uName)
//     }
// })
const upload = multer({storage:storage})

export default upload