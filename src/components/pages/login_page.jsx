import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, TextField, Grid } from '@mui/material';
import Background from "../../assets/images/13695.jpg";
import image1 from "../../assets/images/crm 2.png";
import image2 from "../../assets/images/crm-3.png";
import image3 from "../../assets/images/crm-4.png";
import image4 from "../../assets/images/crm-5.png";
import image6 from "../../assets/images/apartment.png";
import image7 from "../../assets/images/account_circle.png";
import image5 from "../../assets/images/encrypted.png";
import eyeIcon from "../../assets/images/eyeIcon.png";
import eye from "../../assets/images/eye.png";
import config from '../../config/config';


function Loginpage() {
  const [inputType, setInputType] = useState('password');
  const [eyeButton, setEyeButton] = useState(eyeIcon);
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [images, setImages] = useState([image1, image2, image3, image4]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [companylogoData, setcompanylogoData] = useState([]);

  const toggleInputType = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
    setEyeButton(inputType === 'text' ? eyeIcon : eye);
  };

  const handleLogin = () => {
    if (!companyName.trim() || !username.trim() || !password.trim()) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      setErrorMessage('');
      // Navigate to the home page
      // You can add your navigation logic here
    }
  }; 
  useEffect(() => {
    axios.get(`${config.apiUrl}/logindata`)
        .then((response) => {
            console.log('Data received:', response.data);
            setcompanylogoData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Check if all required fields are filled
    setAllFieldsFilled(companyName.trim() && username.trim() && password.trim());
  }, [companyName, username, password]);

  return (
    <div>
      <img src={Background} alt="background" style={{ height: '100vh', position: 'absolute', zIndex: -1, opacity: '25%', width:'100%' }} />
    {companylogoData.map((item, index) => ( <div style={{ height: '100%', display: 'flex' }}>
      <div style={{ width: '60%', height: '100vh', position: 'relative' }}>
       
        <div style={{ }}>
      {images.map((image, index) => (
        <div key={index} style={{ float: 'left',marginTop:'30px', height: '50%', width: '50%', filter: currentIndex === index ? 'drop-shadow(0px 0px 8px  #000000' : 'none' }}>
          <img src={image} alt="logo" style={{ height: currentIndex === index ? '300px' : '200px', transition: 'height 1s' }} />
        </div>
      ))}
</div>




  
      </div>
      <div style={{ position: 'relative', right: '10px', width:'30%' ,paddingLeft:'50px'}}>
        <Typography variant="h6" style={{ color:'#fc921b', marginTop:'100px', fontSize: '40px', fontWeight: 'bolder', fontsize: '40px' }}>
        {item.login.login.title}
        </Typography>
        <Typography variant="h6">{item.login.welcome.title}</Typography>
        <Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: '25px', display: 'flex' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.login.company.logo} alt="logo" style={{ width: '25px', height: 'auto' }} />
            </div>
            <TextField
            label={item.login.company.placeholder}
              variant="outlined"
              fullWidth
              style={{
                height: '50px',
                width: '325px',
                padding: '10px',
                border: 'none',
              }}
              InputProps={{
                style: {
                  backgroundColor: '#d9d9d9',
                  borderRadius: '5px',
                  border: 'none',
                  height: '50px',
                  color: '#ffffff'
                },
              }}
              InputLabelProps={{
                style: {
                  padding: '5px 0 0 30px ',
                  fontSize: '14px',
                },
              }}
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.login.username.logo} alt="logo" style={{ width: '25px', height: 'auto ', background: 'd9d9d9' }} />
            </div>
            <TextField
            label={item.login.username.placeholder}
              variant="outlined"
              fullWidth
              style={{
                height: '50px',
                width: '325px',
                padding: '10px',
                border: 'none'
              }}
              InputProps={{
                style: {
                  backgroundColor: '#d9d9d9',
                  borderRadius: '5px',
                  border: '2px solid #ffffff',
                  height: '50px',
                  color: '#ffffff'
                },
              }}
              InputLabelProps={{
                style: {
                  padding: '5px 0 0 30px ',
                  fontSize: '14px',
                },
              }}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.login.password.logo} alt="logo" style={{ width: '25px', height: 'auto' }} />
            </div>
            <TextField
              label={item.login.password.placeholder}
              variant="outlined"
              type={inputType}
              fullWidth
              style={{ width: '325px', padding: '10px' }}
              InputProps={{
                style: {
                  backgroundColor: '#d9d9d9',
                  borderRadius: '5px',
                  border: '2px solid #ffffff',
                  height: '50px',
                  color: '#ffffff'
                },
              }}
              InputLabelProps={{
                style: {
                  padding: '5px 5px 0 30px ',
                  fontSize: '14px',
                },
              }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <img src={eyeButton} alt="eye" onClick={toggleInputType} style={{ height: '20px', width: 'auto', padding: '25px 0 0 0 ', marginRight:'150px',position:'absolute' }} />
            </div>
          </Grid>
        </Grid>
        <div style={{ display:'flex',justifyContent:'center'  , paddingRight:'50px'}}>
      
        <Typography variant="body2" style={{ color: '#00AEF8', marginTop: '30px', textAlign: 'center' }}>{item.login.forget.title}</Typography>
        </div>
        <div style={{ display:'flex',justifyContent:'center' , paddingRight:'50px'}}>
              {errorMessage && (
            <Typography variant="body2" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{errorMessage}</Typography>
          )}
          </div>
  
        <div style={{ display:'flex',justifyContent:'center' , paddingRight:'50px'}}>
          {allFieldsFilled ? (
            <Link to="/welcome" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" style={{ background: '#2C66DD', color: '#FFFFFf', fontWeight: '500', padding: '5px 15px 5px 15px ', marginTop: '10px' }} onClick={handleLogin}>{item.login.button.title}</Button>
            </Link>
          ) : (
            <Button variant="contained" color="primary" style={{ background: '#212529', color: '#FFFFFf', fontWeight: '500', padding: '5px 15px 5px 15px ', marginTop: '10px' }} onClick={handleLogin}> {item.login.button.title}</Button>
          )}
        
        </div>
      </div>
      </div>
        ))}
    </div>
  );
}

export default Loginpage;