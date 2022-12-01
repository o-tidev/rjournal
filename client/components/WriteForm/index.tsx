import { TextField } from "@material-ui/core";
import React from "react";

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <TextField placeholder="Heading" defaultValue={title} />
    </div>
  );
};
