import React, { useRef, useState } from "react";

export function PhoneInput() {
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="input-filed" tabIndex="0" onKeyDown={handleKeyDown}>
      <span className="basic-text" style={{ fontWeight: "400" }}>
        Phone Number
      </span>

      <div
        className={`custom-input ${
          contactNumberError.length > 0 ? "input-error" : "custom-input"
        }`}
      >
        <PhoneInput
          international
          
          value={contactNumber}
          onChange={(value) => {
            setContactNumber(value);
            setContactNumberError("");
          }}
          ref={inputRef} // Set a ref to the PhoneInput component
        />
      </div>
      {contactNumberError.length > 0 ? (
        <span className="text-danger mt-2">
          <i class="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>
          {contactNumberError}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
