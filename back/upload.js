import multer from 'koa-multer'
import path from 'path'

const imageUpload = multer({ dest: path.join(__dirname, 'src/images/') })

export default imageUpload