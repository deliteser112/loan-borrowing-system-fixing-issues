import React, { useState } from "react";

import { Button } from "@mui/material";

const ListButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    //toggle
    setIsClicked((prevState) => !prevState);

    //once only
    //setIsCopied(true);

    //maybe pass a onClickCall through
    if (typeof props.onClick === "function") {
      props.onClick(props.name);
    }
  };

  return (
    <Button
      className="Button"
      variant={isClicked ? "contained" : "outlined"}
      onClick={handleOnClick}
      color={isClicked ? "success" : "warning"}
      disabled={true}
      
    >
      {isClicked ? "Completed" : props.title}
    </Button>
  );
};

export default ListButton;
