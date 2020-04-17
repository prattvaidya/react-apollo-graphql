import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONTACTS } from "../../queries";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Contact from "../listItems/Contact";

const Contacts = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);
  return (
    <div>
      {data &&
        data.contacts.map(({ id, firstName, lastName }) => (
          <Container key={id}>
            <List>
              <Contact
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
              />
            </List>
          </Container>
        ))}
    </div>
  );
};

export default Contacts;
