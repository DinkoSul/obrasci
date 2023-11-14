import React, { useState } from "react";

const UnosForme = () => {
  const [ime, setIme] = useState("");
  const [names, setNames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, ime]);
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
          />
        </label>
        <input type="submit" value="Potvrdi" />
      </form>
      <hr />
      <div>
        {names.map((name) => (
          <p key={crypto.randomUUID()}>Ime: {name}</p>
        ))}
      </div>
    </div>
  );
};

export default UnosForme;

// Kreirati useState varijablu za pohranu imena
// kreirati funkciju koja dodaje ime u listu
//Ispisati imena ispod forme - po želji koristiti novu komponentu za ispis
