import React, { createContext, useState } from 'react'

export const FormContext = createContext(null);



const FormContextProvider = (props) => {



  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    id:'',
  });

  const [formValueArray, setFormValueArray] = useState([])

  const handleOnChange = (name,value) =>{
    setFormValues({...formValues,[name]:value,})
    
  }

  const handleSubmit = ()=>{
    let detail ={
      name:formValues.name,
      email:formValues.email,
      password:formValues.password,
      id:formValues.id,
    }
    setFormValueArray([...formValueArray,detail])
    setFormValues({
      name: '',
      email: '',
      password: '',
      id:'',
    })
}

  
  const handleDelete = (name)=>{
    const deleteTable = formValueArray.filter((e)=>e.name !== name)
    setFormValueArray(deleteTable)
  }
  
const [formUniqueValue,setFormUniqueValue] = useState(0)

  const handleEdit = (editObj)=>{
    setFormUniqueValue(editObj.name)
    setFormValues({
      name: editObj.name,
      email: editObj.email,
      password: editObj.password,
    })
    
  }

  const handlUpdate = ()=>{
    const updateData = formValueArray.map((item)=>(
      item.name === formUniqueValue ?
      { ...item, name:formValues.name ,email:formValues.email, password:formValues.password 
      }: item
    ))
    setFormValueArray(updateData)
  }

  console.log(formValues,'formValues')
  

  // const contextValue = {handleOnChange,formValues}

  return (
    <FormContext.Provider value={{handleOnChange,formValues,handleSubmit,formValueArray,handleDelete,handleEdit,formUniqueValue,handlUpdate}}>
        {props.children}
    </FormContext.Provider>
  )
}

export default FormContextProvider

