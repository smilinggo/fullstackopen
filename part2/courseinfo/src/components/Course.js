import React from 'react'

// const Course = ({ course }) => {
//   return (
//     <div>
//       <h1>{course.name}</h1>
//         {course["parts"].map((item) => (
//           <p key={item.id}>
//             {item.name} {item.exercises}
//           </p>
//         ))}
//     </div>
//   );
// };

const Total = ({parts}) => {
  const total = parts.reduce(
    (p,c) => p + c.exercises,
    0
  );
  return <p>total of {total} exercises</p>;
}

const Course = ({ course }) => {
  return (
    <div>
        {
        course.map((item) => (
            <div>
                <h1 key={item.id}>{item.name}</h1>
                {item["parts"].map(innerItem => (
                    <p key={innerItem.id}>
                {innerItem.name} {innerItem.exercises}
                </p>)
                )
                }
                <Total parts={item["parts"]} />
            </div>
        )
        )
        }
    </div>
    )}


export default Course;