import { Box, Typography } from "@mui/material";
import { ExerciseData, HorizontalBodyPartProps, ScrollableBoxWrapperProps } from "../types/interfaces";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import {BodyPart} from './HomePage/BodyPart';
import { useContext } from "react";

import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import { ExerciseCard } from "./ExerciseCard";
  

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="arrow arrow__right">
      <img src={leftArrow} alt="arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="arrow">
      <img src={rightArrow} alt="arrow" />
    </Typography>
  );
};

const ScrollableBoxWrapper = ({ children, ...props}: ScrollableBoxWrapperProps) => {
  return (
    <div {...props} >
      {children}
    </div>
  )
}


export const HorizontalScrollBar = ({data, isBodyPart}: HorizontalBodyPartProps<Array<any>>) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
          <ScrollableBoxWrapper 
            key={item}
            itemId={item}
          >
              <Box 
              title={item}
              m="0 40px"
            >
              {isBodyPart ? <BodyPart data={item}/> :
                <ExerciseCard exercise={item}/> 
              }
            </Box>
          </ScrollableBoxWrapper>
        )
      )}
    </ScrollMenu>
  )
}
