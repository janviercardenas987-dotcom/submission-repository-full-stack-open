import Header from "./Course/Header";
import Content from "./Course/Content";
//import Total from "./Course/Total";


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name:'Redux',
        exercises: 11
      }
    ]
  }


  const total = course.parts.reduce((sum, tot) => {return sum + tot.exercises}, 0)
  console.log(total);


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <strong>Total of {total} exercises</strong>

    </div>
  );
};

export default App;