import { useDialog } from "../../providers/DialogProvider";
import { DIALOG, useQuestion } from "../../providers/QuestionProvider";
import ConfirmDialog from "./ConfirmDialog";
import PhoneDialog from "./PhoneDialog";
import PublicDialog from "./PublicDialog";



const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();
  const { question } = useQuestion();
  return <>
    <ConfirmDialog isOpen={activeDialog === DIALOG.CONFIRM_DIALOG} onClose={close} {...additionalProps} />
    <PhoneDialog isOpen={activeDialog === DIALOG.PHONE_DIALOG} onClose={close} question={question} {...additionalProps} />
    <PublicDialog isOpen={activeDialog === DIALOG.PUBLIC_DIALOG} onClose={close} question={question} {...additionalProps} />
  </>
}

export default DialogSwitch;