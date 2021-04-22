import React from 'react'
import FetchedUser from './components/form/fetchedUser'
import Form from './components/form/personForm'
import { FormProvider } from './context/formContext'

function App() {
  return (
    <div className="container pt-3">
      <FormProvider>
        <div className="row">
          <div className="col">
            <Form />
          </div>
        </div>
      </FormProvider>
      <div className="col">
        <FetchedUser />
      </div>
    </div>
  )
}

export default App
