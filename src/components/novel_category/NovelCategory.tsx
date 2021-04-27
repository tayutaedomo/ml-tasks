import React, { useState, VFC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import PreviewImage from './PreviewImage';

import { putFileToNovelCategory } from '../../utils/firebase';

const NovelCategory: VFC = () => {
  const [fileData, setFileData] = useState({ file: null, imageData: null });
  const [uploading, setUploading] = useState(false);

  const onClick = async (e) => {
    const { file, imageData } = fileData;

    if (!file || !imageData) return;

    setUploading(true);

    const createRandomStr = (len) => {
      len = len || 10;
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let s = '';
      for (var i = 0; i < len; i++) {
        s += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return s;
    };

    const createFileName = (original) => {
      const extension = original.split('.')[1].toLowerCase();
      return `${createRandomStr(10)}.${extension}`;
    };

    const newName = createFileName(file.name);
    const metadata = { contentType: file.type };

    const url = await putFileToNovelCategory(newName, imageData, metadata);

    console.log('Put completed.', url);

    setUploading(false);
    setFileData({ file: null, imageData: null });
  };

  return (
    <div>
      <h2>書影ジャンル推論</h2>
      {uploading ? (
        <CircularProgress />
      ) : (
        <form>
          <PreviewImage setFileData={setFileData} />
          <button
            type="button"
            disabled={!fileData.file || uploading}
            onClick={onClick}
          >
            実行
          </button>
        </form>
      )}
    </div>
  );
};

export default NovelCategory;
