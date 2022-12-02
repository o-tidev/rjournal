import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";

export const comments = [
  {
    id: 1,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString()
  },
  {
    id: 2,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString()
  },
  {
    id: 3,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString()
  },
];

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/" />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {comments.map((obj) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
