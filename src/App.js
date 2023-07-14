import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  function hedleNewContact(newCotact) {
    // console.log(newCotact);
    const newContactsArray = [...contacts];
    newContactsArray.push(newCotact);
    setContacts(newContactsArray);
  }
  return (
    <div>
      <AddContact hedleNewContact={hedleNewContact} />
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default App;
