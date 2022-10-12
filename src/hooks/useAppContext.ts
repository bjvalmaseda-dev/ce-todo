import { useContext } from "react";
import { AppCtx } from "./../context/AppContext";

const useAppContext = () => {
  return useContext(AppCtx);
};

export default useAppContext;
