import { useState } from "react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import axios from "axios";

const ReferForm = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:5000/api/referral", formData);
      alert("Referral submitted successfully!");
    } catch (error) {
      alert("Failed to submit referral.");
    }
    setIsLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Your Name"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Your Email"
        name="referrerEmail"
        type="email"
        value={formData.referrerEmail}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Friend's Name"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Friend's Email"
        name="refereeEmail"
        type="email"
        value={formData.refereeEmail}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
        {isLoading ? <CircularProgress color="inherit" size={24} /> : "Submit"}
      </Button>
    </Box>
  );
};

export default ReferForm;

