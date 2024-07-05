import { Modal, Box, Typography } from "@mui/material";
import ReferForm from "./ReferForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

// eslint-disable-next-line react/prop-types
const ReferModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Refer a Friend
        </Typography>
        <ReferForm />
      </Box>
    </Modal>
  );
};

export default ReferModal;
