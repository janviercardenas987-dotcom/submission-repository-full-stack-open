const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';

  const part = [
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
    }

  ]

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={parte1.name} 
        exercises1={parte1.exercises} 
        part2={parte2.name} 
        exercises2={parte2.exercises} 
        part3={parte3.name} 
        exercises3={parte3.exercises} 
      />
      <Total total={parte1.exercises + parte2.exercises + parte3.exercises} />
    </div>
   
    
  );
};

export default App;