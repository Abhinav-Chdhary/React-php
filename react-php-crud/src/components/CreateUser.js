import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [details, setDetails] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost/api/user/save", details);
    console.log(details);
  };
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>CreateUser</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="email" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile:</label>
              </th>
              <td>
                <input type="number" name="mobile" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td align="right" colSpan={2}>
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
