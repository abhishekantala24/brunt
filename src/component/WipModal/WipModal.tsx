import React from "react";
import { Modal } from "react-bootstrap";
import "../../assets/css/component/sessionModal.scss";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { stateSelector, wipModal } from "../../redux/state/stateSlice";

const WipModalView: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const wipState = useSelector(stateSelector).wipModal

  const handleClose = () => {
    dispatch(wipModal({ wipModal: false }))
  }

  return (
    <div>
      <Modal
        show={wipState}
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
                <span>Working in process</span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>We are working on this screen</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-dark" onClick={handleClose}>Redirect to Dashboard</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WipModalView;