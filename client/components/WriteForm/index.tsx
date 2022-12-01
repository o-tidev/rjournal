import React from "react";
import EditorJS from "@editorjs/editorjs";

import styles from "./WriteForm.module.scss";
import { Input } from "@material-ui/core";

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
    });
  }, []);

  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Heading"
        defaultValue={title}
      />
      <div id="editor" />
    </div>
  );
};
