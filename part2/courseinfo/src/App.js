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

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <>
            {courses.map(course => <Course course={course} key={course.id}/>)}
        </>
    ) 
}

export default App