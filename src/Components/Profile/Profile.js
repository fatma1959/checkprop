import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const Profile = ({ profile, children }) => {
  return (
    <div className="pro">
      <h1 style={{ color: "black", fontSize: 30 }}>Hamdi Fatma</h1>
      <p>Date of birth: xx/xx/xxxx</p>
      <pa>Height:164 cm</pa>
      <p>Local address: cité bahri 3.Sfax</p>
      <p>Education Qualification: technician metrology</p>
      <img alt="">{children}</img>
      <Button
        className="best"
        variant="danger"
        onClick={() => {
          alert("my name is Hamdi Fatma");
        }}
      >
        CLICK ME
      </Button>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
