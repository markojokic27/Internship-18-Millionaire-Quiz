import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
const ConfirmDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Je li to vas konacan odgovor?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Ne</Button>
        <Button onClick={onClose}>Da</Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
