import React, { Component } from 'react';

export class PreviewImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageData: null };
  }

  onFileChange(e) {
    console.log('onFileChange', e);
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

  render() {
    const imageData = this.state.imageData;
    let preview = '';

    if (imageData !== null) {
      preview = <img src={imageData} width="64" />;
    }

    return (
      <div>
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          placeholder="Image File"
          onChange={(e) => this.onFileChange(e)}
        />
        {preview}
      </div>
    );
  }
}

export default PreviewImage;
