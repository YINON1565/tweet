import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Tweet } from "../../model/tweet";
import LetterCounter from "../helpers/LetterCounter";
import { tweetsListAtom } from "../../state/atoms/tweet-atom";

const MY_NAME = "Yinon Eliyahu"; // Todo: get from the user
const MAX_LIMIT = 280;

const TweetForm = () => {
  const [text, setText] = useState<string>("");
  const setTweets = useSetRecoilState(tweetsListAtom);

  const clearText = () => setText("");

  const handleTweet = () => {
    const newTweet: Tweet = {
      id: Math.random(),
      name: MY_NAME,
      content: text,
      createdAT: new Date().toISOString(),
    };
    setTweets((oldTweets) => [...oldTweets, newTweet]);
    clearText();
  };

  return (
    <Card
      sx={{
        paddingInline: 3,
        paddingBlock: 2,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      variant="outlined"
    >
      <Typography component="b">{MY_NAME}</Typography>
      <TextField
        multiline
        variant="standard"
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{ disableUnderline: true }}
      />
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "text.secondary",
          }}
        >
          <Box>
            <LetterCounter maxLimit={MAX_LIMIT} text={text} />
          </Box>
          <Box>|</Box>
          <Button
            disabled={text.length === 0 || MAX_LIMIT < text.length}
            sx={{
              borderRadius: "100vh",
            }}
            variant="contained"
            onClick={handleTweet}
          >
            Tweet
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TweetForm;
