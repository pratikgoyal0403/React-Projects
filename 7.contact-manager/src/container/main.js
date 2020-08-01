import React, { Component } from "react";
import AddContact from "../components/add-contact/addContact";
import Contact from "../components/contact/contact";
import Spinner from "../components/spinner/spinner";
import classes from "./main.module.css";

class Main extends Component {
  state = {
    contacts: [],
    allContacts: [],
    isEditing: false,
    editContact: null,
    loading: false,
    searchString: "",
    userId: this.props.userId
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:5000/contact/"+this.props.userId)
      .then((result) => result.json())
      .then((res) => {
        const { contacts } = this.state;
        contacts.push(...res.contacts);
        this.setState({
          contacts: contacts,
          allContacts: contacts,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }
  addContact = async (e, inputs) => {
    e.preventDefault();
    let method = "POST";
    const id = this.state?.editContact?._id;
    let url = "http://localhost:5000/contact/"+this.props.userId;
    if (this.state.isEditing) {
      method = "PUT";
      url = "http://localhost:5000/contact/"+this.props.userId+'?contactId=' + id;

    }
    await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((result) => result.json())
      .then((res) => {
        let { contacts } = this.state;
        if (method === "POST") {
          contacts.push(res.contact);
        } else {
          const index = contacts.findIndex((c) => c._id === id);
          contacts[index] = res.contact;
        }
        this.setState({
          contacts: contacts,
          allContacts: contacts,
          isEditing: false,
          editContact: null,
        });
      })
      .catch((err) => console.log(err));
  };
  editContactHandler = (e, id) => {
    const contact = this.state.contacts.find((el) => el._id === id);
    this.setState({ isEditing: true, editContact: contact });
  };
  filterContactsHandler = (e) => {
    const searchString = e.target.value;
    const contacts = this.state.allContacts;
    let filteredContacts;
    if (searchString !== "") {
      filteredContacts = contacts.filter((c) => {
        return c.name.search(searchString) >= 0 ? c : null;
      });
    } else {
      filteredContacts = this.state.allContacts;
    }
    this.setState({ contacts: filteredContacts });
  };
  deleteContactHandler = (e, id) => {
    fetch("http://localhost:5000/contact/"+this.state.userId+'?contactId=' + id, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((res)=>{
        const { contacts } = this.state;
        const index = contacts.findIndex(c=> c._id === id);
        contacts.splice(index, 1);
        this.setState({contacts: contacts, allContacts: contacts});
      })
      .catch((err) => err);
  };
  render() {
    let contacts = (
      <p className={classes.textCenter}>...please add some contacts</p>
    );
    if (this.state.loading) {
      contacts = <Spinner />;
    }
    if (!this.state.contacts.length <= 0) {
      contacts = this.state.contacts.map((contact) => {
        return (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            contactType={contact.contactType}
            key={contact._id}
            id={contact._id}
            editClicked={this.editContactHandler}
            deleteContact={this.deleteContactHandler}
          />
        );
      });
    }

    return (
      <div className={classes.mainContainer}>
        <div className={classes.addContact}>
          <h1>add contact</h1>
          <AddContact
            submit={this.addContact}
            isEditing={this.state.isEditing}
            editContact={this.state.editContact}
          />
        </div>
        <div className={classes.contactContainer}>
          <input
            type="text"
            name="Filter"
            placeholder="Filter Contacts..."
            onChange={this.filterContactsHandler}
          />
          {contacts}
        </div>
      </div>
    );
  }
}

export default Main;
