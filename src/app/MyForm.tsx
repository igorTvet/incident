import React from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import TvModal from './TvModal';
import Summary from './Summary';
// import "react-datepicker/dist/react-datepicker.css";

const MyForm = () => {
  const [open, setOpen] = React.useState(false);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedChannels, setSelectedChannels] = React.useState([]);

  const [formData, setFormData] = React.useState({
    startDateTime: new Date(),
    endDateTime: new Date(),
    startOrEnd: '',
    priority: '',
    networkType: '',
    serviceAffected: '',
    affectedCell2G: '',
    affectedCell3G: '',
    affectedCell4G: '',
    areaAffected: '',
    severityLevel: '',
    reasonOfProblem: '',
    incidentOwner: '',
    incidentResolutionManager: '',
    registeredComplaints: '',
  });

  const handleChannelsSubmit = (channels: any) => {
    setSelectedChannels(channels);

    setFormData({ ...formData, serviceAffected: channels });

    // Вы можете добавить логику для обработки данных
  };

  const handleReturn = () => {
    // Logic to return to the form or navigate elsewhere
    setIsSubmited(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Update formData
    let updatedFormData = { ...formData, [name]: value };

    // If networkType is not 'mobile', clear the related fields
    if (name === 'networkType' && value !== 'mobile') {
      updatedFormData = {
        ...updatedFormData,
        affectedCell2G: '',
        affectedCell3G: '',
        affectedCell4G: '',
      };
    }

    if (name === 'priority' && value !== 'p1') {
      updatedFormData = {
        ...updatedFormData,
        registeredComplaints: '',
      };
    }

    if (name === 'startOrEnd' && value === 'startDateTime') {
      updatedFormData = {
        ...updatedFormData,
        endDateTime: '' as any,
      };
    }

    setFormData(updatedFormData);

    if (value === 'tv') {
      handleOpen();
    }
  };

  const handleDateChange = (name: string, date: Date | null) => {
    // Update formData with the new date value
    let updatedFormData = {
      ...formData,
      [name]: date,
    };

    // Clear specific fields if networkType is not 'mobile'
    if (name === 'startDateTime' || name === 'endDateTime') {
      if (formData.networkType !== 'mobile') {
        updatedFormData = {
          ...updatedFormData,
          affectedCell2G: '',
          affectedCell3G: '',
          affectedCell4G: '',
        };
      }
    }

    setFormData(updatedFormData);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form data:', formData);

    setIsSubmited(true);
  };

  return !isSubmited ? (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '100%', sm: '80%', md: '60%', lg: '75%' }, // Responsive width
        margin: 'auto',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">Incident Report Form</Typography>

      {formData.startOrEnd === 'startDateTime' ? (
        <div>
          <label>Date and time</label>
          <DatePicker
            selected={formData.startDateTime}
            showTimeInput
            onChange={(date) => handleDateChange('startDateTime', date as Date)}
            placeholderText="Select start date"
          />
        </div>
      ) : formData.startOrEnd === 'endDateTime' ? (
        <>
          <div>
            <label>Date and time</label>
            <DatePicker
              selected={formData.startDateTime}
              showTimeInput
              onChange={(date) => handleDateChange('startDateTime', date as Date)}
              placeholderText="Select start date"
            />
          </div>

          <div>
            <label>Date and time</label>
            <DatePicker
              selected={formData.endDateTime}
              showTimeInput
              onChange={(date) => handleDateChange('endDateTime', date as Date)}
              placeholderText="Select end date"
            />
          </div>
        </>
      ) : (
        ''
      )}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Start or End</InputLabel>
            <Select
              name="startOrEnd"
              label="Start or End"
              value={formData.startOrEnd}
              onChange={handleChange}
            >
              <MenuItem value="startDateTime">Start Date</MenuItem>
              <MenuItem value="endDateTime">End Date</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              label="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <MenuItem value="p1">P1</MenuItem>
              <MenuItem value="p2">P2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Network Type</InputLabel>
            <Select
              name="networkType"
              label="Network Type"
              value={formData.networkType}
              onChange={handleChange}
            >
              <MenuItem value="mobile">mobile</MenuItem>
              <MenuItem value="fix">fix</MenuItem>
              <MenuItem value="it">it</MenuItem>
              <MenuItem value="tv">tv</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Service Affected"
            name="serviceAffected"
            placeholder="Enter affected service"
            value={formData.serviceAffected}
            onChange={(e) => setFormData({ ...formData, serviceAffected: e.target.value })}
            fullWidth
          />
        </Grid>

        {formData.networkType === 'mobile' && (
          <>
            <Grid item xs={2}>
              <TextField
                label="2G"
                name="affectedCell2G"
                placeholder="Enter affected 2G cell number"
                value={formData.affectedCell2G}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="3G"
                name="affectedCell3G"
                placeholder="Enter affected 3G cell number"
                value={formData.affectedCell3G}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="4G"
                name="affectedCell4G"
                placeholder="Enter affected 4G cell number"
                value={formData.affectedCell4G}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </>
        )}

        <Grid item xs={4}>
          <TextField
            label="Area Affected"
            name="areaAffected"
            placeholder="Enter affected area"
            value={formData.areaAffected}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Severity Level</InputLabel>
            <Select
              name="severityLevel"
              label="Severity Level"
              value={formData.severityLevel}
              onChange={handleChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Incident Owner"
            name="incidentOwner"
            placeholder="Enter the incident owner's name"
            value={formData.incidentOwner}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Incident Resolution Manager"
            name="incidentResolutionManager"
            placeholder="Enter the resolution manager's name"
            value={formData.incidentResolutionManager}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {formData.priority === 'p1' && (
          <Grid item xs={4}>
            <TextField
              label="Number of registered complaints"
              name="registeredComplaints"
              placeholder="Enter the number of registered complaints"
              type="number"
              value={formData.registeredComplaints}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            label="Reason of problem"
            name="reasonOfProblem"
            placeholder="Describe the reason of the problem"
            value={formData.reasonOfProblem}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>

      {formData.networkType === 'tv' && (
        <TvModal open={open} handleClose={handleClose} onSubmit={handleChannelsSubmit} />
      )}
    </Box>
  ) : (
    <Summary handleReturn={handleReturn} formData={formData} />
  );
};

export default MyForm;
