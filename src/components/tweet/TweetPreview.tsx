import { FC } from "react";
import Moment from "react-moment";
import { Box, Divider, Typography } from "@mui/material";
import { Tweet } from "../../model/tweet";

interface TweetPreviewProps {
  tweet: Tweet;
}

const TweetPreview: FC<TweetPreviewProps> = ({ tweet }) => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {tweet.name}
        </Typography>
        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            fontSize: 20,
          }}
        >
          {tweet.content}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          <Moment format="hh:mm:ss A · ll">{tweet.createdAT}</Moment>
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default TweetPreview;
