import React, { createContext, useContext, useState } from "react";
import { MODAL_VIEWS, OpenModalProps } from "../types/modalView";
import { Breakpoint } from "@mui/material";

interface State {
  view: MODAL_VIEWS | undefined;
  isOpen: boolean;
  data: any;
  isFullScreen: boolean;
  canClose: boolean;
  width: Breakpoint;
  onClose?: (() => void) | null;
}

interface IModalActions {
  openModal: <T>(props: OpenModalProps<T>) => void;
  closeModal: () => void;
  clearModal: () => void;
}

interface IModalProviderProps {
  children: React.ReactNode;
}

const initialState: State = {
  view: undefined,
  isOpen: false,
  canClose: true,
  data: null,
  isFullScreen: false,
  width: "sm",
};

const initialActionsState: IModalActions = {
  closeModal: () => {},
  openModal: () => {},
  clearModal: () => {},
};

const Context = createContext<State>(initialState);
const ModalActionContext = createContext<IModalActions>(initialActionsState);

export const ModalContextProvider: React.FC<IModalProviderProps> = ({
  children,
}) => {
  const [modalState, setModalState] = useState(initialState);
  const openModal = (props: OpenModalProps<any>) => {
    const {
      view,
      canClose = true,
      isFullScreen = false,
      width = "sm",
      onClose = null,
      payload = null,
    } = props;
    const newModalState = {
      isOpen: true,
      isFullScreen,
      data: payload,
      view,
      width,
      canClose,
      onClose,
    };
    if (modalState.isOpen && modalState.view != view) {
      closeModal();
      setModalState(newModalState);
      //   setTimeout(() => {
      //     setModalState(newModalState);
      //   }, 300);
    } else {
      setModalState(newModalState);
    }
  };

  const closeModal = () => {
    setModalState(initialState);
    if (modalState?.onClose) {
      modalState.onClose();
    }
  };

  const clearModal = () => {
    setModalState(initialState);
  };
  return (
    <Context.Provider value={modalState}>
      <ModalActionContext.Provider
        value={{
          openModal,
          closeModal,
          clearModal,
        }}
      >
        {children}
      </ModalActionContext.Provider>
    </Context.Provider>
  );
};

// export const useModalState = () => useContext(Context);
export function useModalState<TPayload>() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return { ...context, data: context.data as TPayload };
}
export const useModalAction = () => useContext(ModalActionContext);
