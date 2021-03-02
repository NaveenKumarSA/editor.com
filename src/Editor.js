import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Editor extends Component {
  render() {
    return (
      <div>
        <div className="w-100">
          <CKEditor editor={ClassicEditor} />
        </div>
        <div class="w-100"></div>
      </div>
    );
  }
}

export default Editor;
