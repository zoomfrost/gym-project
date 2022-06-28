import { Box, Typography } from "@mui/material";
import { HorizontalBodyPartProps, ScrollableBoxWrapperProps } from "../types/interfaces";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import {BodyPart} from './BodyPart';
import { useContext } from "react";

import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
  
interface MyDivProps extends React.HTMLAttributes<HTMLDivElement> {
  itemId?: string
}

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
    <Typography onClick={() => {
      scrollNext();
      console.log('a')
    }} className="arrow">
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


export const HorizontalScrollBar = ({data, selectedBodyPart, setSelectedBodyPart}: HorizontalBodyPartProps<string[]>) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
          <ScrollableBoxWrapper itemId={item}>
              <Box 
              key={item}
              title={item}
              m="0 40px"
            >
              <BodyPart data={item} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} />
            </Box>
          </ScrollableBoxWrapper>
        )
      )}
    </ScrollMenu>
  )
}
