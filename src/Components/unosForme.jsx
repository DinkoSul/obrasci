import React, { useState } from "react";

const UnosForme = () => {
  const [ime, setIme] = useState("");
  const [names, setNames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, ime]);
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
//zadatak2:
// 1. Napraviti novu komponentu koja će sadržavati formu za unos novog korisnika
//    (traka za unos teksta za ime, odabir spola, email, lozinka, i tipka za potvrditi unos)
// 2. Nakon pritiska na tipku forme novi korisnik se mora spremiti u stanje (state) i prikazati na ekranu
// 3. Nakon pritiska na tipku forme polja se moraju resetirati na početno stanje
