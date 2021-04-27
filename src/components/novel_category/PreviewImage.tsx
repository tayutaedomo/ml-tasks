import React, { createRef, VFC, Dispatch } from 'react';
import { Box, Button } from '@material-ui/core';

import { FileData, ActionType } from './NovelCategory';

type Props = {
  fileData: FileData;
  dispatchFile: Dispatch<ActionType>;
};

const PreviewImage: VFC<Props> = (props) => {
  const { fileData, dispatchFile } = props;
  const fileRef = createRef<HTMLInputElement>();

  const handleChange = (files: FileList) => {
    if (files.length > 0) {
      const file: File = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result.toString();
        dispatchFile({ type: 'choose', file, imageData });
      };
      reader.readAsDataURL(file);
    } else {
      dispatchFile({ type: 'reset' });
    }
  };

  const resetInput = () => {
    fileRef.current.value = '';
    dispatchFile({ type: 'reset' });
  };

  return (
    <>
      {fileData.imageData && (
        <Box mr={1}>
          <img src={fileData.imageData} width="64" />
        </Box>
      )}
      <input
        accept="image/png,image/jpeg,image/jpg"
        multiple={false}
        onChange={(e) => handleChange(e.target.files)}
        placeholder="Image File"
        ref={fileRef}
        type="file"
      />
      {fileData.imageData && (
        <Box mt={1}>
          <Button
            color="default"
            onClick={() => resetInput()}
            type="button"
            variant="contained"
          >
            Reset
          </Button>
        </Box>
      )}
    </>
  );
};

export default PreviewImage;
