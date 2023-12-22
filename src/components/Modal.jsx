import React from "react";
import useFetch from "../hooks/useFetch";

const Modal = ({ id, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const { data, loading, error } = useFetch("/contacts/?page=1");
  console.log(data);
  if (loading) {
    return <h6>Loading...</h6>;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div
      className="modal fade show"
      id={id}
      role="dialog"
      aria-labelledby={`${id}Label`}
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog card-img-overlay mw-100 h-100"
        role="document"
      >
        <div className="modal-content h-75">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              Modal {id}
            </h5>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-lg btn-outline-primary" type="button">
                All Contacts
              </button>
              <button className="btn btn-lg btn-outline-warning" type="button">
                US Contacts
              </button>

              <button
                className="btn btn-lg btn-outline-danger"
                onClick={onClose}
              >
                <span aria-hidden="true">Close</span>
              </button>
            </div>

            {/* contacts list */}
            <ul
              style={{ height: "50%", overflowY: "scroll", marginTop: "10px" }}
            >
              {data?.results?.map((contact) => {
                return (
                  <li
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      background: "whitesmoke",
                      marginBottom: "5px",
                    }}
                    key={contact.id}
                  >
                    {contact.phone}
                  </li>
                );
              })}
            </ul>

            <label class="form-check-label" for="flexCheckDefault">
              Only even
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
