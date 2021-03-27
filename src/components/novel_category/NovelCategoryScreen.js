import React, { Component, useState } from 'react';
import PreviewImage from './PreviewImage';

import { putFileToNovelCategory } from '../../utils/firebase';

const NovelCategoryScreen = () => {
  const [fileData, setFileData] = useState({ file: null, imageData: null });
  const [uploading, setUploading] = useState(false);

  const onClick = async (e) => {
    const { file, imageData } = fileData;

    if (!file || !imageData) return;

    setUploading(true);

    const metadata = { contentType: file.type };
    const url = await putFileToNovelCategory(file.name, imageData, metadata);

    setUploading(false);
    setFileData({ file: null, imageData: null });

    console.log('Completed.', url);
  };

  return (
    <div>
      <h2>書影ジャンル推論</h2>
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
    </div>
  );
};

export default NovelCategoryScreen;
