import React, { createContext, useContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({})

  const setForm = (values) => {
    setDataForm((prevData) => ({
      ...prevData,
      ...values,
    }))
  }

  return (
    <FormContext.Provider
      value={{
        dataForm,
        setForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useDataForm = () => useContext(FormContext)
