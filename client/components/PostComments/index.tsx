import { Paper, Divider, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import { Comment } from "../../components/Comment";
import { AddCommentForm } from "../AddCommentForm";

type CommentObj = {
  text: string;
  id: number;
  createdAt: string;
  user: {
    fullname: string;
    avatarUrl: string;
  };
};

interface PostCommentsProps {
  items: CommentObj[];
}

export const PostComments: React.FC<PostCommentsProps> = ({ items }) => {
  const [tab, setTab] = React.useState(0);

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, value) => setTab(value)}
          className="mt-20"
          value={tab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {items.map((obj) => (
          <Comment
            key={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
          />
        ))}
      </div>
    </Paper>
  );
};
