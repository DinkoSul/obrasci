import React, { useState } from "react";

const Zadatak = () => {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [names, setNames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, { ime, email, password, gender }]);
    setIme("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ime:
          <input
            type="text"
            name="name"
            onChange={(e) => setIme(e.target.value)}
            value={ime}
            autoFocus
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Odaberi spol</option>
            <option value="male">Muško</option>
            <option value="female">Žensko</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Potvrdi" />
      </form>
      <hr />
      <div>
        {names.map((name) => (
          <p key={crypto.randomUUID()}>
            Ime: {name.ime}, Email: {name.email}, Lozinka: {name.password},
            Spol: {name.gender}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Zadatak;
