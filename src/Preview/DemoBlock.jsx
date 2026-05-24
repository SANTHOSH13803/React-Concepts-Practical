import { useState } from "react";
import sdk from "@stackblitz/sdk";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function DemoBlock({ title, preview, files }) {
  const fileNames = Object.keys(files);

  const [active, setActive] = useState(fileNames[0]);

  const copyCode = () => {
    navigator.clipboard.writeText(files[active]);
  };

  const openStackBlitz = () => {
    sdk.openProject({
      title,

      template: "create-react-app",

      files
    });
  };

  return (
    <div
      className="
      bg-white
      border
      rounded-xl
      shadow-sm
      overflow-hidden
      mb-10 
      w-full
      "
    >
      {/* Header */}

      <div
        className="
        px-8
        py-5
        border-b
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          {title}
        </h2>
      </div>

      {/* Preview */}

      <div
        className="
        p-8
        border-b
        bg-slate-50
        "
      >
        <h3
          className="
          text-sm
          text-gray-500
          mb-4
          "
        >
          Preview
        </h3>

        <div
          className="
          bg-white
          border
          rounded-lg
          p-6
          "
        >
          {preview ?? "NO Preview"}
        </div>
      </div>

      {/* Toolbar */}

      <div
        className="
        flex
        justify-between
        items-center
        px-6
        py-4
        border-b
        bg-white
        "
      >
        {/* File Tabs */}

        <div
          className="
  flex
  gap-2
  overflow-x-auto
  whitespace-nowrap
  scrollbar-thin
  pb-2
  max-w-125
  "
        >
          {fileNames.map((file) => (
            <button
              key={file}
              onClick={() => setActive(file)}
              className={`
px-4
py-2
rounded
text-sm
shrink-0

${active === file ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}

`}
            >
              {file}
            </button>
          ))}
        </div>

        {/* Actions */}

        <div
          className="
          flex
          gap-3
          "
        >
          <button
            onClick={copyCode}
            className="
            px-4
            py-2
            border
            rounded
            hover:bg-gray-100
            "
          >
            Copy
          </button>

          <button
            onClick={openStackBlitz}
            className="
            px-4
            py-2
            bg-blue-500
            text-white
            rounded
            hover:bg-blue-600
            "
          >
            Edit StackBlitz
          </button>
        </div>
      </div>

      {/* Code */}

      <SyntaxHighlighter
        language="jsx"
        style={oneDark}
        customStyle={{
          margin: 0,

          borderRadius: 0,

          padding: "30px"
        }}
      >
        {files[active]}
      </SyntaxHighlighter>
    </div>
  );
}

export default DemoBlock;
