import { useMemo } from "react";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { tweetsListAtom } from "../../state/atoms/tweet-atom";
import TweetPreview from "./TweetPreview";

const TweetsList = () => {
  const tweets = useRecoilValue(tweetsListAtom);
  const tweetsSorted = useMemo(
    () =>
      [...tweets].sort(
        (a, b) =>
          new Date(b.createdAT).getTime() - new Date(a.createdAT).getTime()
      ),
    [tweets]
  );
  return (
    <Box
      sx={{
        marginBlockStart: 4,
        display: "flex",
        flexDirection: "column",
        // gap: 2,
      }}
    >
      {tweetsSorted.map((tweet) => (
        <TweetPreview tweet={tweet} key={tweet.id} />
      ))}
    </Box>
  );
};

export default TweetsList;
