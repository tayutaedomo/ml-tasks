import React, { Component } from 'react';
import PreviewImage from './PreviewImage';

export class NovelCategoryScreen extends Component {
  render() {
    return (
      <div>
        <h2>書影ジャンル推論</h2>
        <form>
          <PreviewImage />
        </form>
      </div>
    );
  }
}

export default NovelCategoryScreen;
