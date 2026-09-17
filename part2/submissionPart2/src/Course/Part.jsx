const Part = (props) => {
  console.log(props.part)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Part