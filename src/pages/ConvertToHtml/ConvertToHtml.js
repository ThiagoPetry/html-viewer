import React, { useState } from "react";

import InsertHtml from "../../components/InsertHtml/InsertHtml";
import ViewHtml from "../../components/ViewHtml/ViewHtml";

import "../../styles/global.css";
import "./style.css";

const ConvertToHtml = () => {
  const [content, setContent] = useState("");

  const onChangeInsertHtml = (e) => {
    setContent(e.target.value);
  }

  return (
    <>
      <div id={"container"}>
        <h1 id={"title"}>&#60;HTML/&#62; Viewer</h1>
        <InsertHtml
          onChangeInsertHtml={(e) => onChangeInsertHtml(e)}
        />
        <ViewHtml
          content={content}
        />
      </div>
    </>
  );
}

export default ConvertToHtml;