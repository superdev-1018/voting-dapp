import { useState,useRef } from 'react';
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

export default function Ckeditor(){
    const mdEditor = useRef(null);
    const [value, setValue] = useState("");

//   const handleClick = () => {
//     if (mdEditor.current) {
//       alert(mdEditor.current.getMdValue());
//     }
//   };

  const handleEditorChange = ({ html, text }:any) => {
    const newValue = text.replace(/\d/g, "");
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
      {/* <button >Get value</button> */}
      <Editor
        ref={mdEditor}
        value={value}
        style={{
          height: "400px",
          width:"max-w-[800px]"
        }}
        onChange={handleEditorChange}
        renderHTML={text => <ReactMarkdown/>}
      />
    </div>
  );
}