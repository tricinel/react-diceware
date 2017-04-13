import React from "react";

import { generatePassword } from "../helpers/password";

const Password = ({ count }) => (
  <span>{generatePassword(count)}</span>
);

export default Password;