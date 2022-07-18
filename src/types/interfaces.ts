import { Dispatch, SetStateAction } from "react";

export interface HorizontalBodyPartProps<T> {
    data: T,
    isBodyPart?: boolean
}

export interface ScrollableBoxWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    itemId: string
    children: React.ReactNode
}

export interface ExerciseData {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
}

export interface exerciseDetailProps {
    exerciseDetail: ExerciseData
}



export interface ExercisesProps {
    data: Array<ExerciseData>
}

export interface ExerciseCardProps {
    key?: number
    exercise: ExerciseData
}
