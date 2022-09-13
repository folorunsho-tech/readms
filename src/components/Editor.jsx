import React from "react";
import { marked } from "marked";
// import DOMPurify from "dompurify";

// let html = "";
const Editor = () => {
  const [view, setView] = React.useState("editor");
  const [markdown, setMarkdown] = React.useState("");
  const [text, setText] = React.useState("");
  const input = React.useRef();
  React.useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <main className="editor">
      <div className="tabs">
        <button
          id="markdown"
          onClick={() => {
            setView("editor");
          }}
          className={`${view === "editor" ? "tab-active" : ""}`}
        >
          markdown
        </button>
        <button
          id="preview"
          onClick={() => {
            setView("preview");
          }}
          className={`${view === "preview" ? "tab-active" : ""}`}
        >
          preview
        </button>
      </div>
      <section className="editor-container">
        {view === "editor" ? (
          <div className="markdown">
            <textarea
              name="markdown"
              id="markdown"
              className="markdown"
              ref={input}
              value={text}
              autoFocus
              autoComplete="on"
              onChange={(e) => {
                setText(e.target.value);
                setMarkdown(marked.parse(e.target.value));
              }}
            ></textarea>
          </div>
        ) : (
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        )}
      </section>
    </main>
  );
};

export default Editor;
