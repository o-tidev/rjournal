import React from "react";
import Input from "@material-ui/core/Input";
import styles from "./AddCommentForm.module.scss";
import { Button } from "@material-ui/core";

interface AddCommentFormProps {}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.form}>
      <Input
        onFocus={() => setClicked(true)}
        onChange={(e) => setText(e.target.value)}
        value={text}
        classes={{ root: styles.fieldRoot }}
        placeholder="Leave a comment..."
        fullWidth
        minRows={clicked ? 5 : 1}
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Post comment
        </Button>
      )}
    </div>
  );
};
