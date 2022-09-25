// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

			{data.map((item, index) => {
				return (
					<div key={index}>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src={item.photo} />
							</ListItemAvatar>
							<ListItemText
								primary={item.name}
								secondary={
									<React.Fragment>
										<Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
											{item.phone}
										</Typography>
										{item.email}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
					</div>
				);
			})};


		</List>
	);
};

export default Contact;
