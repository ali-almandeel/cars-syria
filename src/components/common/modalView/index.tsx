import { MODAL_VIEWS } from "../../../types/modalView";
import AddAddressModal from "../../AddAddressModal";
import UpdateAddressModal from "../../UpdateAddressModal";

export const renderModalContent = (view: MODAL_VIEWS) => {
  switch (view) {
    case "SHOW_CREATE_ADDRESS_MODAL":
      return <AddAddressModal />;
    case "SHOW_UPDATE_ADDRESS_MODAL":
      return <UpdateAddressModal />;
    default:
      return null;
  }
};

// secondary: #b2a260
