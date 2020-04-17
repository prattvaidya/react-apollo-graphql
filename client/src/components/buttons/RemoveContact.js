import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { filter } from "lodash";
import { GET_CONTACTS, REMOVE_CONTACT } from "../../queries/index";

import Button from "@material-ui/core/Button";

const RemoveContact = ({ id, firstName, lastName }) => {
  const [removeContact] = useMutation(REMOVE_CONTACT, {
    update(cache, { data: { removeContact } }) {
      const { contacts } = cache.readQuery({ query: GET_CONTACTS });
      cache.writeQuery({
        query: GET_CONTACTS,
        data: { contacts: filter(contacts, (c) => c.id !== removeContact.id) },
      });
    },
  });
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        removeContact({
          variables: { id },
          optimisticResponse: {
            __typename: "Mutation",
            removeContact: { __typename: "Contact", id, firstName, lastName },
          },
        });
      }}
      variant="contained"
      color="secondary"
      style={{ margin: "10px" }}
    >
      Delete
    </Button>
  );
};

export default RemoveContact;
