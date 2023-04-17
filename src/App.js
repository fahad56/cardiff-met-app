import React, {useState} from 'react';
import CallBackForm from './CallBackForm';
const initialFormData = Object.freeze({
  name: "",
  contact: "",
  email: "",
  date: "",
  school: "",
  submitted: false
});
function App() {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    if(e.target.name === 'date'){
      const isInFuture =  Date.parse(e.target.value) > Date.now();
      if (!isInFuture){
        updateFormData({
          ...formData,
          date: ""
        })
        window.alert("Date should be in future")
        return;
      }
    }
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const answer = window.confirm("Do you wish to confirm schedule?");
    if (answer) {
      updateFormData({
        ...formData,
        submitted: true
      })
    } else {
      reset()
    }
  };

  const reset = () => {
    updateFormData({
      ...initialFormData
    })
  }
  return (<CallBackForm 
    reset={reset}
    formData={formData}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
  />)
}
  
 

export default App;
