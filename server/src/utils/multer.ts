import multer from "multer";
import { Request } from "express";
import path from "path";

const storage = multer.memoryStorage();

const imageFormatSelector = (req: Request, file: Express.Multer.File, cb: any) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

export const upload = multer({
  storage: storage,
  fileFilter: imageFormatSelector
})