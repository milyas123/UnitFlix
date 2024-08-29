import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";
import { MdRedo, MdSpaceBar, MdUndo } from "react-icons/md";

const fontSizeArr = [
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "42px",
  "54px",
];

const SizeStyle = Quill.import("attributors/style/size");
SizeStyle.whitelist = fontSizeArr;
Quill.register(SizeStyle, true);

const Size = Quill.import("formats/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

// Formats objects for setting up the Quill editor
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "list",
  "bullet",
  "code-block",
];

const CustomToolbar = ({ quillRef }) => {
  const handleUndo = () => {
    const quill = quillRef.current.getEditor();
    quill.history.undo();
  };

  const handleRedo = () => {
    const quill = quillRef.current.getEditor();
    quill.history.redo();
  };

  const handleSpace = () => {
    const quill = quillRef.current.getEditor();
    const { index } = quill.getSelection();
    quill.insertText(index, " ");
  };

  return (
    <div id="toolbar">
      <span className="ql-formats">
        <div className="ql-section">
          <button className="ql-undo" onClick={handleUndo}>
            <MdUndo />
          </button>
          <button className="ql-redo" onClick={handleRedo}>
            <MdRedo />
          </button>
        </div>
        <div className="ql-section">
          <button className="ql-space" onClick={handleSpace}>
            <MdSpaceBar />
          </button>
        </div>
        <div className="ql-section">
          <select className="ql-header">
            <option value={1}></option>
            <option value={2}></option>
            <option value={3}></option>
            <option value={4}></option>
            <option value={5}></option>
            <option value={6}></option>
            <option value={false}></option>
          </select>
        </div>
        <div className="ql-section">
          <select className="ql-size">
            {fontSizeArr.map((font, index) => {
              return (
                <option value={font} key={index}>
                  {font}
                </option>
              );
            })}
          </select>
        </div>
        <div className="ql-section">
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>
          <button className="ql-strike"></button>
          <button className="ql-blockquote"></button>
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
          <button className="ql-indent" value="+1">
            Indent
          </button>
          <button className="ql-indent" value="-1">
            Outdent
          </button>
        </div>
      </span>
    </div>
  );
};

const TextEditor = ({ overview, setOverview }) => {
  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  const handleChange = (blogText) => {
    const modifiedContent = blogText.replace(
      /·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "",
    );
    setOverview(modifiedContent);
  };

  return (
    <div>
      <CustomToolbar quillRef={quillRef} />
      <ReactQuill
        className="h-[160px] rounded-sm border border-mercury bg-background ring-offset-background placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:h-[100px] lg:h-[160px] xl:h-[230px] xl:rounded-md xl:border-2 2xl:h-[300px]"
        theme="snow"
        value={overview}
        onChange={handleChange}
        ref={quillRef}
        formats={formats}
        modules={modules}
      />
    </div>
  );
};

export default TextEditor;
