import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import UpdateContact from "../forms/UpdateContact";
import RemoveContact from "../buttons/RemoveContact";

const Contact = (props) => {
  const [editMode, setEditMode] = useState(false);

  const handleBackButton = () => {
    setEditMode(!editMode);
  };

  const fullName = () => `${props.firstName} ${props.lastName}`;
  return (
    <>
      {!editMode ? (
        <ListItem>
          <ListItemText primary={fullName()}></ListItemText>
          <Button
            onClick={() => setEditMode(true)}
            variant="contained"
            style={{ margin: "5px" }}
          >
            Edit
          </Button>
          <RemoveContact
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
          />
        </ListItem>
      ) : (
        <UpdateContact
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleBackButton}
        />
      )}
    </>
  );
};

export default Contact;
