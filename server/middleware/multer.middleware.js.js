
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, './public/uploads')
    },
    filename :(req, file,cb)=>{
        const name = Date.now()+"_"+file.originalname
        cb(null,name)
    }
})

module.exports = multer({storage:storage})
