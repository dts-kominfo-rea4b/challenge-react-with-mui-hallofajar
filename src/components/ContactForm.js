// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import { Card, TextField, Box, Button } from "@mui/material";


const ContactForm = ({ handleClick }) => {
	const [newContact, setNewContact] = useState({
		name: "",
		phone: "",
		email: "",
		photo: "",
	});
	// Form berisi name, phone, email, dan photo url
	// Buatlah state newContact berupa objek sesuai dengan data yang ada

	return (
		<Card style={{ padding: 20 }}>
			<TextField
				fullWidth required

				id="name"
				label="Name"
				// defaultValue="Orang"
				margin="dense"
				variant="filled"
				onChange={
					(e) => { setNewContact({ ...newContact, name: e.target.value }) }
				}
			/>
			<TextField
				fullWidth required
				id="phone"
				label="Phone"
				// type="number"
				// defaultValue="084327823423"
				margin="dense"
				variant="filled"
				onChange={
					(e) => { setNewContact({ ...newContact, phone: e.target.value }) }
				}
			/>
			<TextField
				fullWidth required
				id="email"
				label="Email"
				// defaultValue="hallofajar@gmail.com"
				margin="dense"
				variant="filled"
				onChange={
					(e) => { setNewContact({ ...newContact, email: e.target.value }) }
				}
			/>
			<TextField
				fullWidth required
				id="photo"
				label="Photo"
				// defaultValue="https//google.com/img/hallofajar.png"
				margin="dense"
				variant="filled"
				onChange={
					(e) => { setNewContact({ ...newContact, photo: e.target.value }) }
				}
			/>

			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Button
					variant="contained"
					onClick={() => {
						handleClick(newContact);
						setNewContact({
							name: "",
							phone: "",
							email: "",
							photo: "",
						});
					}}
				>ADD NEW</Button>
			</Box>
		</Card>
	);
}

export default ContactForm;