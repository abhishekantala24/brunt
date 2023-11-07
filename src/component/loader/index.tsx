import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { toast, ToastOptions } from "react-toastify"
import { useSelector } from "react-redux"

import { hideMessage, lemSelector } from "../../redux/lem/lemSlice"
import { LemState, MessageState } from "../../redux/lem/types"
import { useAppDispatch } from "../../redux/store"

const Loader: React.FC = (): JSX.Element | null => {
  const dispatch = useAppDispatch()
  const state: LemState = useSelector(lemSelector)
  const { message, loading } = state
  
  useEffect(() => {
    if (message && message !== null && !loading) {
      const { type, messageText, duration, position, onCloseAction } = message as MessageState
      const toastConfig: ToastOptions = {
        position,
        autoClose: duration || false,
        onClose: () => {
          dispatch(hideMessage())
          if (onCloseAction) {
            onCloseAction()
          }
        },
      }

      switch (type) {
        case "error":
          toast.error(messageText, toastConfig)
          break

        case "success":
          toast.success(messageText, toastConfig)
          break

        default:
          toast.info(messageText, toastConfig)
          break
      }
    }
    const handleBeforeUnload = () => {
      dispatch(hideMessage())
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [loading, message])

  if (loading) {
    return (
      <div className="modal d-flex loader-l">
        <Spinner
          animation="border"
          className="cls-spinner"
        />
      </div>
    )
  }
  return null
}

export default Loader