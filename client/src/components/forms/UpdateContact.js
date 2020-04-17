import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { UPDATE_CONTACT } from "../../queries/index";

const UpdateContact = (props) => {
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [updateContact] = useMutation(UPDATE_CONTACT);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateContact({
          variables: { id, firstName, lastName },
          optimisticResponse: {
            __typename: "Mutation",
            updateContact: { __typename: "Contact", id, firstName, lastName },
          },
        });
        props.onButtonClick();
      }}
    >
      <TextField
        label="First Name"
        defaultValue={firstName}
        placeholder="i.e. John"
        margin="normal"
        onChange={(e) => setFirstName(e.target.value)}
        variant="outlined"
        style={{ margin: "10px" }}
      />
      <TextField
        label="Last Name"
        defaultValue={lastName}
        placeholder="i.e. John"
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        variant="outlined"
        style={{ margin: "10px" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
      >
        Update Contact
      </Button>
      <Button
        onClick={props.onButtonClick}
        variant="contained"
        color="secondary"
        style={{ margin: "10px" }}
      >
        Cancel
      </Button>
    </form>
  );
};

export default UpdateContact;
