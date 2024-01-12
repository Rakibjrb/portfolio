import PropTypes from "prop-types";
import woman from "../../assets/icons/woman.svg";

const Modal = ({ statusMessage, message }) => {
  return (
    <dialog
      id="open_modal"
      className="modal modal-bottom sm:modal-middle text-black font-lato"
    >
      <div className="modal-box bg-white">
        <div className="flex justify-center">
          <img className="w-[200px] mt-3 mb-5" src={woman} alt="woman pic" />
        </div>
        <h3 className="font-bold text-center text-3xl">{statusMessage}!!!</h3>
        {message && (
          <p className="pt-4 text-xl text-center">
            Thanks for submit your information ...
          </p>
        )}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  statusMessage: PropTypes.string,
  message: PropTypes.bool,
};
export default Modal;
