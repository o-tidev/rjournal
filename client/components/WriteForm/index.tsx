import { Input } from "@material-ui/core";
import React from "react";
import styles from "./WriteForm.module.scss";

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Heading"
        defaultValue={title}
      />
    </div>
  );
};
