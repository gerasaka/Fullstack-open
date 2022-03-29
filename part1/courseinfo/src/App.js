const Header = ({ course }) => <h1>{course}</h1>;

const Content = (props) => {
  return (
    <>
      <Part name={props.part1["name"]} number={props.part1["exercises"]} />
      <Part name={props.part2["name"]} number={props.part2["exercises"]} />
      <Part name={props.part3["name"]} number={props.part3["exercises"]} />
    </>
  );
};

const Part = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const Total = ({ num1, num2, num3 }) => (
  <p>Number of exercises {num1 + num2 + num3}</p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        num1={part1["exercises"]}
        num2={part2["exercises"]}
        num3={part3["exercises"]}
      />
    </div>
  );
};

export default App;
