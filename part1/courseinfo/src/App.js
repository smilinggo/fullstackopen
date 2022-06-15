const Header = (props) => {
  return (
  <div>
    <h1>
      {props.course}
    </h1>
  </div>

  ) 
}
//Seperated component to generate partss here instead of in one function in Content
const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
  );
}

const Combined = (props) => {

  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  );
};

const Content = (props) => {

  return (
    <div>
      <Part name={props.parts[0]["name"]} exercise={props.parts[0]["exercises"]} />
      <Part name={props.parts[1]["name"]} exercise={props.parts[1]["exercises"]} />
      <Part name={props.parts[2]["name"]} exercise={props.parts[2]["exercises"]} />
    </div>
  );
}


const Total = (props) => {
  return (
    <div>
      <Combined
        total={
          props.parts[0]["exercises"] +
          props.parts[1]["exercises"] +
          props.parts[2]["exercises"]
        }
      />
    </div>
  );
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App