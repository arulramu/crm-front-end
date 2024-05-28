import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import config from '../../config/config';
import { Button } from '@material-ui/core';
import AddWidget from '../atoms/add_widgets'; // Correct import path for AddWidget component

const useStyles = makeStyles({
  createWidget: {
    width: '18%',
    height: 100,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: '5%',
    marginLeft: '5%',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginLeft: '-1%',
  },
  title: {
    marginLeft: '-1%',
  },
});

const CreateWidget = ({ backgroundColor }) => {
  const classes = useStyles();
  const [widgetData, setWidgetData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

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

  const handleButtonClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      {widgetData.map((widget, index) => (
        <div key={index} className={classes.createWidget} style={{ background: backgroundColor }}>
          <Button onClick={handleButtonClick}>
            <img src={widget.menu.menu_bar.menu_images.create_widget_icon.icon} alt='widget' className={classes.icon} />
          </Button>
          <h4 className={classes.title}>{widget.menu.menu_bar.menu_images.create_widget_icon.title}</h4>
        </div>
      ))}
      {openDialog && <AddWidget onClose={handleCloseDialog} backgroundColor={backgroundColor} />}
    </div>
  );
};

export default CreateWidget;