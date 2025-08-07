import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    engineer: "",
    date: "",
    voltage: "",
    current: "",
    breaker_status: "",
    alarm_status: "",
    remarks: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/submit", formData);
      alert("Checklist submitted!");
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="App">
      <h2>Data Center Checklist</h2>
      <form onSubmit={handleSubmit}>
        <input name="engineer" placeholder="Engineer Name" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} />
        <input name="voltage" placeholder="Voltage (V)" onChange={handleChange} />
        <input name="current" placeholder="Current (A)" onChange={handleChange} />
        <select name="breaker_status" onChange={handleChange}>
          <option value="">Breaker Status</option>
          <option value="ON">ON</option>
          <option value="OFF">OFF</option>
        </select>
        <select name="alarm_status" onChange={handleChange}>
          <option value="">Alarm</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>
        <textarea name="remarks" placeholder="Remarks" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
