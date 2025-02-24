import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { renderModalContent } from ".";
import {
  useModalAction,
  useModalState,
} from "../../../context/ModalContextProvider";

export default function ModalsContainer() {
  const { view, isOpen, isFullScreen, canClose, width } = useModalState();
  const { closeModal } = useModalAction();

  return (
    isOpen && (
      <Dialog
        fullWidth
        fullScreen={isFullScreen}
        open={true}
        onClose={() => canClose && closeModal()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={width}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>{view && renderModalContent(view)}</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Disagree</Button>
          <Button onClick={closeModal} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
}
