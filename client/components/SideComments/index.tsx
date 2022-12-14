import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import data from "../../../data";

import styles from "./SideComments.module.scss";
import { CommentItem } from "./CommentItem";
import clsx from "clsx";

export const SideComments = () => {
  const [visible, setVisible] = React.useState<boolean>(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisibility}>
        Comments <ArrowRightIcon />
      </h3>
      {visible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
