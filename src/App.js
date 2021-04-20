import React from 'react';
import FetchedUser from './components/form/fetchedUser';
import Form from './components/form/personForm';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="col">
        <FetchedUser />
      </div>
    </div>
  );
}

export default App;
