import { Dispatch, SetStateAction } from "react";

// export interface ExercisesComponentsProps {
//     selectedBodyPart: string,
//     setExercises: Dispatch<SetStateAction<never[]>>,
//     setSelectedBodyPart: Dispatch<SetStateAction<string>>
// }

export interface HorizontalBodyPartProps<T> {
    data: T,
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
