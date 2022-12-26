import React from "react";
import Link from "next/link";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";

import styles from "./Post.module.scss";
import { PostActions } from "../PostActions";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>
            Cat layed to rest in an english miniature park — and became the hero
            of trolls and stories about the fluffy apocalypse
          </a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        While others could not understand the corellation between size of the
        environment and the cat, others started to invent scenarios about
        fluffzila
      </Typography>
      <Image
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={500}
        width={600}
      />
      <PostActions />
    </Paper>
  );
};
