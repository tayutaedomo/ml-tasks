import React, { Component, createRef } from 'react';

export class PreviewImage extends Component {
  constructor(props) {
    super(props);

    this.state = { imageData: null };

    this.fileInput = createRef();
  }

  onFileChange(e) {
    const files = e.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ imageData: e.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageData: null });
    }
  }

  resetInput() {
    this.fileInput.current.value = '';
    this.setState({ imageData: null });
  }

  render() {
    const imageData = this.state.imageData;
    let preview = '';
    let resetButton = '';

    if (imageData !== null) {
      preview = (
        <div>
          <img src={imageData} width="64" />
        </div>
      );
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
        {resetButton}
        {preview}
      </div>
    );
  }
}

export default PreviewImage;
