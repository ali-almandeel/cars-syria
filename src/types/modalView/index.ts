import { Breakpoint } from "@mui/material"

export type MODAL_VIEWS = "SHOW_CREATE_ADDRESS_MODAL" | "SHOW_UPDATE_ADDRESS_MODAL"
export type OpenModalProps<T> = {
    view: MODAL_VIEWS,
    width?: Breakpoint,
    payload?: T,
    onClose?: (() => void) | null,
    canClose?: boolean,
    isFullScreen?: boolean
}

