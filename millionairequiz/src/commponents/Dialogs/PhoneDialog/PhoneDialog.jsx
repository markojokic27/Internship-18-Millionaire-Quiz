import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import classes from "./index.module.css";

const PhoneDialog = ({ isOpen, onClose, question }) => {
  const handleDialogText = () => {
    let phone = "";
    const random = Math.floor(Math.random() * 100)
    if (random < 10) {
      const wrong = question.answers.filter(answer => answer !== question.answer);
      phone = `Mislim da je: ${wrong.text}`;
    }
    else{
    phone = `Mislim da je: ${question.text}`;}
    return phone;
  }

  return <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle><p>{handleDialogText()}</p></DialogTitle>
    <DialogActions>
      <Button onClick={onClose} className={classes.DialogButton}>Kraj poziva</Button>
    </DialogActions>
  </Dialog>
}

export default PhoneDialog;