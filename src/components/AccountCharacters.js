import "../../public/styles/components/accountcharacters.scss";
import editIcon from "../../public/img/svg/edit-icon.svg";
import React from "react";

const AccountCharacters = (props) => {
  const { name, email, id, modalShow, haveEdit } = props;
  return (
    <li className="list-li" key={id}>
      <div className="desc-wrapper">
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>
      {haveEdit && (
        <div className="btns">
          <img
            alt=""
            src={editIcon}
            onClick={modalShow}
          />
        </div>
      )}
    </li>
  );
};

export default AccountCharacters;
