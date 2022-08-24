import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";
import { jwtPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });
  const IMG = process.env.NEXT_PUBLIC_IMG;
  
  useEffect(() => {
    const token = Cookies.get('token');
    if (token){
        const jwtToken = atob(token);
        const payload: jwtPayloadTypes = jwtDecode(jwtToken);
        const userFromPayload: UserTypes = payload.player;
        setUser(userFromPayload);
    }
}, []);
  return (
    <div className="user text-center pb-50 pe-30">
        <img src={`${IMG}/${user.avatar}`} alt="profile" width="90" height="90" className="img-fluid mb-20" style={{borderRadius: '100%'}} />
        <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
        <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  )
}
