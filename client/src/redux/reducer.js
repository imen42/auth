import {  GET_SPACE, GET_SPACE_FAIL, GET_SPACE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes";

const init = {
    loading:false,
    errors:null, 
    users:null,
    token:localStorage.getItem("token"),  
    isAuth: false
}

const reducer = (state=init,{type,payload}) => {
    switch (type) {
        case REGISTER:
        case LOGIN:
        case GET_SPACE:
            return {
                ...state,loading:true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,loading:false,users:payload.user,token:payload.token,
                errors:null // si na3mal des erreurs w state mte3 les erreus t3abet, wba3d ki na3mal 7aja s7i7a  les erreurs hakom ma lazemch yab9ou msajlin w yothhrouli fi 5edma successful,  donc najem nzid (coditional rundering) start hatha lehne bch nfara8 state te3 les erreurs
            };
        case LOGIN_SUCCESS: {//najem nzidha m3a case REGISTER_SUCCESS: itha n7eb na3malha nafsha, si non na3mal 7aja mo5talfa 3leha
                 return{
                    ...state, loading:false, errors:null, token:payload.token, users:payload.user
                 }
                }

        case GET_SPACE_SUCCESS:
            return {
                loading:false, users:payload, isAuth:true,
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case GET_SPACE_FAIL:
                return {
                    ...state,loading:false,errors:payload
                };
        default:
            return state;
    }}
    

export default reducer;