import  { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import ReferModal from "./ReferModal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h3">Refer & Earn</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Hero;
