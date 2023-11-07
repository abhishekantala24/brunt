import React from "react";
import { Modal } from "react-bootstrap";
import "../../assets/css/component/sessionModal.scss";
import { BsInfoCircle } from "react-icons/bs"; 
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { sessionModal, stateSelector } from "../../redux/state/stateSlice";
import { authSelector } from "../../redux/auth/authSlice";
import { logoutAction } from "../../redux/auth/middleware";

const SessionModal: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const sessionState = useSelector(stateSelector).sessionModal
  const userProfile = useSelector(authSelector).userDetails

  const handleClose = () => {
    dispatch(sessionModal({ sessionModal: false }))
    dispatch(logoutAction({
      Email: userProfile?.email
    }))
  }

  return (
    <div>
      <Modal
        show={sessionState}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="cls-modal-update"
      >
        <Modal.Header className="modal-header">
          <Modal.Title className="w-100">
            <div className="row align-items-center">
              <div className="col-2 d-flex justify-content-center">
                <span className="circle">
                  <BsInfoCircle />
                </span>
              </div>
              <div className="col-8 text-center">
                <span>Session Expired</span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="fw-bold fs-6">Your Session has expired.</p>
          <p className="fw-bold fs-6 m-0">You have to logout.</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>Logout</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SessionModal;
