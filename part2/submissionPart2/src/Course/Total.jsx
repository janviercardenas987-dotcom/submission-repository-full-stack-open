const Total = (props) => {
  return <strong>Total of {
    props.parts[0].exercises + 
    props.parts[1].exercises + 
    props.parts[2].exercises + 
    props.parts[3].exercises
    } exercises</strong>;
};


export default Total;