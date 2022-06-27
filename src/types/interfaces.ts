import { Dispatch, SetStateAction } from "react";

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