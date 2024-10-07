import React from "react";
import { IconLink } from "@tabler/icons-react";

const LinkPaste = ({ handleLinkPaste }) => {
  <label htmlFor="link-input" className="cursor-pointer">
    <IconLink size={22} />
    <input
      type="text"
      id="link-input"
      onChange={handleLinkPaste}
      className="hidden"
    />
  </label>;
};

export default LinkPaste;
