import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const useAuth = () => useContext(AuthContext);

// use Auth Provider Context
export default useAuth;
