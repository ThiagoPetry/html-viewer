import React from "react";

const ViewHtml = ({
  content
}) => {
  const msg = () => {
    return (
      <p>Enter your HTML in the textarea to view here</p>
    );
  }

  const html = (value) => {
    return (
      <div
        id={"value"}
        dangerouslySetInnerHTML={markup(value)}
      />
    );
  }

  const markup = (value) => {
    return {__html: value};
  }

  return (
    <>
      <div
        id={"viewHtml"}
        name={"viewHtml"}
      >
        {
          content ? html(content) : msg()
        }
      </div>
    </>
  );
}

export default ViewHtml;