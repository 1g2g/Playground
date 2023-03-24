import React from "react";
import { nicknameType } from "../type/interface";

const Store = React.createContext<nicknameType>({ nickname: "" });

export default Store;
