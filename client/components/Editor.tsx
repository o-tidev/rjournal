import React from "react";
import EditorJS from "@editorjs/editorjs";

export const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("Error destroying editor", e));
    };
  }, []);

  return <div id="editor" />;
};
