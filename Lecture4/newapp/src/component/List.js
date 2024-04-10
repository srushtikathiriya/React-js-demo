import React from 'react';

function List() {
  const expressions = [
    "Hello!",
    "How are you?",
    "Welcome to React!",
    "Have a nice day!"
  ];

  return (
    <div>
      <h1>Expressions</h1>

      {/* <ul type="square">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
        <li>Fifth</li>
     </ul> */}
     
      <ul itemType='square'>
        {expressions.map((expression, index) => (
          <li key={index} className='text-red-500'>{expression}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
