import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { HorizontalBodyPartProps } from "../types/interfaces";

import {BodyPart} from './BodyPart';



export const HorizontalScrollBar = ({data, selectedBodyPart, setSelectedBodyPart}: HorizontalBodyPartProps<string[]>) => {
  return (
    <div>
      {data.map((item) => (
          <Box 
            key={item}
            
            title={item}
            m="0 40px"
          >
            <BodyPart data={item} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} />
          </Box>
        )
      )}
    </div>
  )
}
