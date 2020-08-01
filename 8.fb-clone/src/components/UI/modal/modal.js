import React, {useState} from "react";
import Avatar from "../../avatar/avatar";
import classes from "./modal.module.css";


const Modal = (props) => {
    const [username, setUsername] = useState(props.userInfo.username);
    const [image, setImage] = useState('');

    const updateUsername = (event)=>{
        setUsername(event.target.value)
    }
    const updateImage = (event)=>{
        setImage(event.target.files[0])
    }
  let content = null;
  if (props.userInfo) {
    content = (
      <div className={classes.modalContent}>
        <div className={classes.avatarContainer}>
          <Avatar imageUrl={props.userInfo.profileImg}/>
        </div>
        <div className={classes.feilds}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={updateUsername}
        />
        <input type="file" name="profileImage" onChange={updateImage} />
        <button className={classes.btn} onClick={()=> props.clicked(username, image)}>Update profile</button>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.modalContainer}>
      {content ? content: props.children}
    </div>
  );
};

export default Modal;
