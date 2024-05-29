import { Box, Typography } from "@mui/material";
import React from "react";
import { BodyPartsCard, ExerciseCard } from "../Index";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowImg from "../../assets/icons/left-arrow.png";
import RightArrowImg from "../../assets/icons/right-arrow.png";
import { useId } from "react";

const BodyParts = ({ data, bodyPart, setBodyPart, bodyPartsList }) => {
  const id = useId();
  const LeftArrow = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img
          src={LeftArrowImg}
          alt="Left"
          loading="lazy"
          style={{ cursor: "pointer" }}
        />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img
          src={RightArrowImg}
          alt="Right"
          loading="lazy"
          style={{ cursor: "pointer" }}
        />
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        margin: "5rem 0",
      }}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {bodyPartsList ? (
              <BodyPartsCard
                value={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default BodyParts;
