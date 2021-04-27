import React, { createRef, VFC, Dispatch } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

import { FileData, ActionType } from './NovelCategory';
import PreviewCard from './PreviewCard';

const useStyles = makeStyles((theme) => ({
  inputFile: {
    opacity: 0,
    appearance: 'none',
    position: 'absolute',
  },
}));

type Props = {
  fileData: FileData;
  dispatchFile: Dispatch<ActionType>;
};

const FileForm: VFC<Props> = (props) => {
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

  const classes = useStyles();

  return (
    <>
      {fileData.imageData && (
        <Box my={1}>
          <PreviewCard
            imageData={fileData.imageData}
            name={fileData.file?.name}
          />
        </Box>
      )}
      <Button component="label" variant="contained" color="default">
        Choose File
        <input
          accept="image/png,image/jpeg,image/jpg"
          className={classes.inputFile}
          multiple={false}
          onChange={(e) => handleChange(e.target.files)}
          placeholder="Image File"
          ref={fileRef}
          type="file"
        />
      </Button>
      {fileData.imageData && (
        <Button
          color="default"
          onClick={() => resetInput()}
          type="button"
          variant="contained"
        >
          Reset
        </Button>
      )}
    </>
  );
};

export default FileForm;
