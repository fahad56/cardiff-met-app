
import logo from './logo.png';

function CallBackForm({
    reset,
    formData,
    handleSubmit,
    handleChange,
}) {

    const schools = [
        { label: "Select School", value: "" },
        { label: "School of Sport and Health Science", value: "School of Sport and Health Science" },
        { label: "School of Management", value: "School of Management" },
        { label: "School of Technology", value: "School of Technology" },
        { label: "School of Education and Social Policy", value: "School of Education and Social Policy"},
        { label: "School of Art and Design", value: "School of Art and Design" },
          
      ] 
    
  if (formData.submitted) {
    return (
      <div className="App">
        <div className='App-header'>
            <img src= {logo} className="App-logo" alt="logo.png" />
          <label >Call Back Request has been Confirmed!!! </label>
          <br/>
          <label >Name: {formData.name} </label>
          <label >Contact: {formData.contact} </label>
          <label >Email: {formData.email}</label>
          <label >School: {formData.school}</label>
          <label >Date: {formData.date} </label>
          <br/>
          <input name="Request New Call Back" type="button" onClick={reset} value="Request New Call Back"/>
        </div> 
      </div>
    )
  } else {
    return (
      <div className="App">
        <form  className="App-header" onSubmit={handleSubmit}>
          <img src= {logo} className="App-logo" alt="logo.png" />
          <p>
            Request a Call Back Form
          </p>
          
          <label htmlFor="name">Name: </label>
          <input 
            required 
            id="name" 
            type="text"  
            name="name" 
            value={formData.name} 
            title='name is required'
            onChange={handleChange} 
        />
          <label htmlFor="contact">Contact: </label>
          <input 
            required 
            type="tel" 
            id="contact" 
            name="contact" 
            pattern="[0-9]{11}"
            onChange={handleChange} 
            value={formData.contact} 
            title='contact is required'
        />
          <label htmlFor="email">Email: </label>
          <input 
            required 
            id="email" 
            name="email" 
            type="email"  
            value={formData.email} 
            title='email is required'  
            onChange={handleChange} 
            />
          <label htmlFor="school">school:</label>
          <select 
            required 
            id="school" 
            name="school" 
            title='school is required'
            onChange={handleChange} 
          > 
            {schools.map(({label, value}) => <option key={label} value={value} defaultValue={value}>{label} </option>)}
  
          </select>
          <label htmlFor="date">Date & Time: </label>
          <input 
            id="date" 
            required 
            name="date" 
            value={formData.date} 
            type="datetime-local"  
            title='date is required'
            onChange={handleChange} 
        />
          <br/>
          <input name="submit" type="submit"/>
          </form>
      </div>
    );
  }
}
  
 

export default CallBackForm;
