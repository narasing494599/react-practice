import React from 'react';

export const userData = {
  firstName: 'Narasing', // feel free to replace the name value
  lastName: 'Kokane', // feel free to replace the name value
  title: 'Trainee', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const title = userData.title;
  return (
    <div id="user" data-testid="user">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
