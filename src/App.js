import Header from './components/Header';
import './App.css';
import React from 'react';
import { Grid, Typography } from '@mui/material';

import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  const [contacts, setContacts] = React.useState(contactsJSON);


  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const handleClick = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Header />
        {/* Masukkan ContactForm di sini */}
        <Grid item xs={6}>
          <ContactForm handleClick={handleClick} />
        </Grid>
        {/* Masukkan ContactList di sini */}
        <Grid item xs={6}>
          <Contact data={contacts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
