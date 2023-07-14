import React, { useState } from "react";

const AddContact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  //   console.log(name);

  function handleClick(props) {
    let newCotact = {
      name,
      surname,
      phone,
    };
    // console.log(newCotact);
    props.hedleNewContact(newCotact);
  }
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
      />
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
};

export default AddContact;

// contacts: [
//   {
//     name: "Kani",
//     lastName: "Abdrahmanova",
//     phone: +996708010101,
//   },
// ];
