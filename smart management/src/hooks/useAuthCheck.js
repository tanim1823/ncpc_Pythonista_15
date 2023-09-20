import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../rtk/features/auth/authSlice";

export const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localAuth = localStorage.getItem("auth");
      const auth = JSON.parse(localAuth);
      console.log("From authCheckHooks: ", auth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setTimeout(() => {
      setAuthChecked(true);
    }, 5000);
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};
