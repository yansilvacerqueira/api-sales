import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';

interface IUploadConfig {
  driver: 's3' | 'disk';
  tmpFolder: string;
  directory: {
    tmp: string;
    uploads: string;
  };
  config: {
    disk: {
      storage: StorageEngine;
    };
    s3: {
      bucket: string;
    };
  };
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
const uploadFolder = path.resolve(__dirname, '..', '..','uploads');

export default {
  driver: process.env.STORAGE_DRIVER,
  tmpFolder,
  directory:  {
    tmp: tmpFolder,
    uploads: uploadFolder,
  },
  config: {
    disk: {
      storage: multer.diskStorage({
        destination: tmpFolder,
        filename(request, file, callback) {
          const fileHash = crypto.randomBytes(10).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    },
    s3: {
      bucket: 'app-sales',
    },
  },
} as IUploadConfig;
