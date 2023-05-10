import React, {useEffect} from "react";
import useAppContext from "../store/context";
import { useNavigate } from "react-router-dom";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";
import UserInfo from "../components/UserProfile/UserInfo";
import UserScores from "../components/UserProfile/UserScores";

const UserProfile = () => {
    const {store} = useAppContext()
    const {isUserLogged , userInfo} = store;
    
    const navigate = useNavigate()

    useEffect(() => {
        if(!isUserLogged) {
            navigate("/login")
        }
        console.log(isUserLogged)

    },[isUserLogged])

    return (
        <div className="nes-container col-8 is-dark is-rounded with-title mt-5 userProfile">
            
            <span className="title">User Profile</span>

            { 
                userInfo 
                ? <>
                    <UserInfo info={userInfo.user_info}/>
                    <UserScores scores={userInfo.scores}/>
                </>
                : <UseAnimations className="mx-auto" animation={loading2} size={500} strokeColor="#EC7063" />
            }

        </div>
    );

}


export default UserProfile;