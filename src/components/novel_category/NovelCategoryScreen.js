import React, { Component, useState } from 'react';
import PreviewImage from './PreviewImage';

const NovelCategoryScreen = () => {
  const [fileData, setFileData] = useState({ file: null, imageData: null });

  const onSubmit = (e) => {
    const { file, imageData } = fileData;

    if (!file || !imageData) return;

    console.log('uploadImage', file);
    e.preventDefault();
    // TODO: Upload to gcs
  };

  return (
    <div>
      <h2>書影ジャンル推論</h2>
      <form onSubmit={onSubmit}>
        <PreviewImage setFileData={setFileData} />
        <button type="submit" disabled={!fileData.imageData}>
          実行
        </button>
      </form>
    </div>
  );
};

export default NovelCategoryScreen;
