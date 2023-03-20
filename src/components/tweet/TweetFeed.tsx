import { Container } from "@mui/material";
import TweetForm from "./TweetForm";
import TweetsList from "./TweetsList";

const TweetFeed = () => {
  return (
    <Container
      sx={{
        maxWidth: "600px !important",
        margin: "auto",
        paddingBlock: 4,
      }}
    >
      <TweetForm />
      <TweetsList />
    </Container>
  );
};

export default TweetFeed;
