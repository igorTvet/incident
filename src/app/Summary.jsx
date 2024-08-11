import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const displayNames = {
    startDateTime: 'Start Date Time',
    endDateTime: 'End Date Time',
    startOrEnd: 'Start or End',
    priority: 'Priority',
    networkType: 'Network Type',
    serviceAffected: 'Service Affected',
    affectedCell2G: 'Affected Cell 2G',
    affectedCell3G: 'Affected Cell 3G',
    affectedCell4G: 'Affected Cell 4G',
    areaAffected: 'Area Affected',
    severityLevel: 'Severity Level',
    reasonOfProblem: 'Reason of Problem',
    incidentOwner: 'Incident Owner',
    incidentResolutionManager: 'Incident Resolution Manager',
    registeredComplaints: 'Registered Complaints',
  };

const Summary = ({handleReturn, formData}) => {
  

    const filterFormData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== '' && value !== null)
    );

    console.log('formData----------', filterFormData)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2} sx={{textAlign: 'left'}}>
            {Object.entries(filterFormData).map(([key, value]) => (
                <Grid item xs={12} key={key}>
                    <strong>{displayNames[key] || key}:</strong> {value instanceof Date ? value.toLocaleString() : value}
                </Grid>
            ))}
        </Grid>

      <Button variant="contained" color="primary" onClick={handleReturn} style={{marginTop: 30}}>
        Return to Form
      </Button>
    </Box>
  );
};

export default Summary;
