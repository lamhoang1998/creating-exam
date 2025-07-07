import multer, { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { IMAGES_DIRECTORY } from './config.multer';

fs.mkdirSync(IMAGES_DIRECTORY, { recursive: true });

const storageFileLocal = diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const fileName =
      `local` + file.fieldname + '-' + uniqueSuffix + fileExtension;
    cb(null, fileName);
  },
});

export default storageFileLocal;
