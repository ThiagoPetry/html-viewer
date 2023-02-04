import React from "react";

const InsertHtml = ({
  onChangeInsertHtml
}) => {
  return (
    <>
      <textarea
        id={"insertHtml"}
        name={"insertHtml"}
        onChange={(e) => onChangeInsertHtml(e)}
      />
    </>
  );
}

export default InsertHtml;