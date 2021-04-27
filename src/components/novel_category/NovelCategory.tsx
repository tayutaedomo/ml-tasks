import React, { useReducer, useState, VFC } from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';

import PreviewImage from './PreviewImage';
import { putFileToNovelCategory } from '../../utils/firebase';

export type FileData = {
  file: File;
  imageData: string;
};

const initialState: FileData = { file: null, imageData: null };

export type ActionType = {
  type: 'choose' | 'reset';
  file?: File;
  imageData?: string;
};

function reducer(state: FileData, action: ActionType): FileData | never {
  switch (action.type) {
    case 'choose':
      return { file: action.file, imageData: action.imageData };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const NovelCategory: VFC = () => {
  const [fileData, dispatchFile] = useReducer(reducer, initialState);
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

    dispatchFile({ type: 'reset' });
    setUploading(false);
  };

  return (
    <>
      <Box mt={2}>
        <Typography variant="h5">書影ジャンル推論</Typography>
      </Box>
      <Box mt={4}>
        {uploading ? (
          <CircularProgress />
        ) : (
          <form>
            <Box mb={1}>
              <PreviewImage fileData={fileData} dispatchFile={dispatchFile} />
            </Box>
            <Button
              color="primary"
              disabled={!fileData.file || uploading}
              onClick={onClick}
              type="button"
              variant="contained"
            >
              実行
            </Button>
          </form>
        )}
      </Box>
    </>
  );
};

export default NovelCategory;
