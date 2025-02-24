import { Button } from "@mui/material";
import { useModalAction } from "../context/ModalContextProvider";

const AddAddressModal = () => {
  const { openModal } = useModalAction();

  return (
    <div>
      AddAddressModal
      <Button
        onClick={() => {
          openModal({ view: "SHOW_UPDATE_ADDRESS_MODAL" });
        }}
      >
        UPDATE
      </Button>
    </div>
  );
};

export default AddAddressModal;
