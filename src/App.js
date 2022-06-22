import React from 'react';

const App = () => {
  const [text, setText] = React.useState('');
  return <div>
    <input  value={text} onChange={(event) => setText(event.target.value)}></input>
    {text}
  </div>;
};

export default App;
