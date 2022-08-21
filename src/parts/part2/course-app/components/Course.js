import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {

    const totalExercises = course.parts.reduce(
        (acc, curr) => acc + curr.exercises, 0
    )

    return (
        <>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <Total totalExercises={totalExercises} />
        </>
    )
}

export default Course