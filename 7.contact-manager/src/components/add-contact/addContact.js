import React, { useState, Component } from "react";
import classes from "./addContact.module.css";

// const AddContact = (props) => {
//     console.log('rendering addContact')
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [type, setType] = useState("");
//   if(props.editContact){
//       setName(props.editContact.name);
//       setEmail(props.editContact.email);
//       setPhone(props.editContact.phone);
//   }
//   return (
//     <form
//       action="#"
//       className={classes.addContactForm}
//       onSubmit={(e) =>{
//           props.submit(e, { name: name, email: email, phone: phone, type: type }, props.id)
//         setName('');
//         setEmail('');
//         setPhone('');
//         setType('');
//       }
//       }
//     >
//       <input
//         type="name"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <input
//         type="number"
//         placeholder="Phone"
//         onChange={(e) => setPhone(e.target.value)}
//         value={phone}
//       />
//       <div className={classes.radioBtn}>
//         <p>Contact Type</p>
//         <input
//           type="radio"
//           name="phoneType"
//           value="personal"
//           onChange={(e) => setType(e.target.value)}
//         />
//         <label for="personal">Personal</label>
//         <input
//           type="radio"
//           name="phoneType"
//           value="professional"
//           onChange={(e) => setType(e.target.value)}
//         />
//         <label for="professional">Professional</label>
//       </div>
//       <button type="submit" className={classes.submitBtn}>
//         add Contact
//       </button>
//     </form>
//   );
// };

// export default AddContact;

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    type: "",
  };
  static getDerivedStateFromProps(props, state){
  if (props.editContact && props.isEditing && state.type === '') {
    console.log('editing')
      return {
        name: props.editContact.name, 
        email: props.editContact.email,
        phone: props.editContact.phone,
        type: props.editContact.type
      };
    }
  }
  render() {
    return (
      <form
        action="#"
        className={classes.addContactForm}
        onSubmit={(e) => {
          this.props.submit(e, { ...this.state });
          this.setState({ name: "", email: "", phone: "", type: "" });
        }}
      >
        <input
          type="name"
          placeholder="Name"
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          value={this.state.email}
        />
        <input
          type="number"
          placeholder="Phone"
          onChange={(e) => this.setState({ phone: e.target.value })}
          value={this.state.phone}
        />
        <div className={classes.radioBtn}>
          <p>Contact Type</p>
          <input
            type="radio"
            name="phoneType"
            value="personal"
            onChange={(e) => this.setState({ type: e.target.value })}
          />
          <label for="personal">Personal</label>
          <input
            type="radio"
            name="phoneType"
            value="professional"
            onChange={(e) => this.setState({ type: e.target.value })}
          />
          <label for="professional">Professional</label>
        </div>
        <button type="submit" className={classes.submitBtn}>
          add Contact
        </button>
      </form>
    );
  }
}

export default AddContact;
