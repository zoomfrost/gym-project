import { Dispatch, SetStateAction } from "react";
import { CommonProps } from "@mui/material/OverridableComponent";

export interface ExercisesComponentsProps {
    selectedBodyPart: string,
    setExercises: Dispatch<SetStateAction<never[]>>,
    setSelectedBodyPart: Dispatch<SetStateAction<string>>
}

export interface HorizontalBodyPartProps<T> {
    data: T,
    selectedBodyPart: string,
    setSelectedBodyPart: Dispatch<SetStateAction<string>>
}

export interface ScrollableBoxWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    itemId: string
    children: React.ReactNode
}
