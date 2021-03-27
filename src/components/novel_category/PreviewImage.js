import React, { createRef, useState } from 'react';

const PreviewImage = ({ setFileData }) => {
  const [imageData, setImageData] = useState(null);
  const fileInput = createRef();

  const onFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setImageData(imageData);
        setFileData({ file, imageData });
      };
      reader.readAsDataURL(file);
    } else {
      setImageData(null);
      setFileData({ file: null, imageData: null });
    }
  };

  const resetInput = () => {
    fileInput.current.value = '';
    setImageData(null);
    setFileData({ file: null, imageData: null });
  };

  let preview = '';
  let resetButton = '';

  if (imageData !== null) {
    preview = <img src={imageData} width="64" />;
    resetButton = (
      <button type="button" onClick={() => resetInput()}>
        Reset
      </button>
    );
  }

  return (
    <div>
      <input
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        placeholder="Image File"
        onChange={(e) => onFileChange(e)}
        ref={fileInput}
      />
      {preview}
      {resetButton}
    </div>
  );
};

export default PreviewImage;
