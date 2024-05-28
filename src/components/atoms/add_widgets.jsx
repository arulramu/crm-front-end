import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { autocompleteClasses } from '@mui/material';

function AddWidget({ onClose, backgroundColor }) {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [widgetData, setWidgetData] = useState([]);

  useEffect(() => {
    axios.get(`${config.apiUrl}/menudata`)
      .then((response) => {
        console.log('Widget data received:', response.data);
        setWidgetData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching widget data:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        width: 320,
        height: autocompleteClasses,
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        boxShadow: '0 0px 9px rgba(0, 0, 0, 0.9)',
        background: backgroundColor, // Use backgroundColor prop here
        marginLeft:'36%',
        marginTop:'-10%'
      }}
    >
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', marginTop: '10%' }}>
        <img src="path_to_image_before_text_field" alt="" style={{ marginRight: 7, height: 20 }} />
        <span style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>NEW WIDGETS</span>
      </div>

      <div style={{ marginBottom: 16, marginTop:'10%' }}>
        <TextField
          label="Enter Widget Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
          InputProps={{
            sx: {
              background: 'white',
              borderRadius: 2,
            },
          }}
        />
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ marginTop: 5, backgroundColor: '#fff' }}
          sx={{
            background: 'white',
            borderRadius: 2,
          }}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="Calls">
            <img src="https://workiy-crm-images.s3.us-east-2.amazonaws.com/Common+Images+of+CRM/call.png" alt="Option 1" style={{ marginRight: 8, height: 20 }} />
            <li style={{listStyle:'none'}}>Calls</li>
          </MenuItem>
          <MenuItem value="Enquiry">
            <img src="https://workiy-crm-images.s3.us-east-2.amazonaws.com/Common+Images+of+CRM/call_merge.png" alt="Option 2" style={{ marginRight: 8, height: 20 }} />
            <li style={{listStyle:'none'}}>Enquiry</li>
          </MenuItem>
          <MenuItem value="Leads">
            <img src="https://workiy-crm-images.s3.us-east-2.amazonaws.com/Common+Images+of+CRM/chat_on.png" alt="Option 3" style={{ marginRight: 8, height: 20 }} />
            <li style={{listStyle:'none'}}>Leads</li>
          </MenuItem>
        </Select>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddWidget;