import { FC } from "react";
import { Box } from "@mui/material";

interface LetterCounterProps {
  text: string;
  maxLimit: number;
}

const LetterCounter: FC<LetterCounterProps> = ({ text, maxLimit }) => {
  return (
    <Box color={text.length > maxLimit ? "error.main" : "text.secondary"}>
      {maxLimit - text.length}
    </Box>
  );
};

export default LetterCounter;
