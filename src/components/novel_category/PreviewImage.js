import React, { Component, createRef } from 'react';

export class PreviewImage extends Component {
  constructor(props) {
    super(props);

    this.setFileData = props.setFileData;

    this.state = {
      imageData: null,
    };

    this.fileInput = createRef();
  }

  onFileChange(e) {
    const files = e.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        this.setState({ imageData });
        this.setFileData({ file, imageData });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageData: null });
      this.setFileData({ file: null, imageData: null });
    }
  }

  resetInput() {
    this.fileInput.current.value = '';
    this.setState({ imageData: null });
    this.setFileData({ file: null, imageData: null });
  }

  render() {
    const { imageData } = this.state;
    let preview = '';
    let resetButton = '';

    if (imageData !== null) {
      preview = <img src={imageData} width="64" />;
      resetButton = (
        <button type="button" onClick={() => this.resetInput()}>
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
          onChange={(e) => this.onFileChange(e)}
          ref={this.fileInput}
        />
        {preview}
        {resetButton}
      </div>
    );
  }
}

export default PreviewImage;
