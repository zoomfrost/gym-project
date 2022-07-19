import { Dispatch, SetStateAction } from "react";

export interface HorizontalBodyPartProps<T> {
    data: T,
    child?: string
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

export interface SimilarTargetData {
    difficulty: string
    equipment: string
    instructions: string
    muscle: string
    name: string
    type: string
}


export interface ExercisesProps {
    data: Array<ExerciseData>
}

export interface ExerciseCardProps {
    key?: number
    exercise: ExerciseData
}
