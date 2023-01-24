const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {

    const sum = parts.reduce((partialSum, part) => partialSum + part.exercises, 0)
    return (
        <p>Total exercises {sum}</p>
    )
    //    console.log(exercises)
}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part part={part} key={part.id} />)}
        </>
    )
}

const Course = ({ course }) =>
    <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        {/* <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} /> */}
    </>

export default Course

