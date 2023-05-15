import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes";

const init = {
    loading:false,
    errors:null,
    users:null,
    token : null,
};



const reducer = (state=init,{payload,type})=>{
    switch (type) {
        case REGISTER:
        return{
            ...state,payload:true,
        }
        case REGISTER_SUCCESS:
            
            return{
                ...state,payload:false,users:payload,
            }
            case LOGIN_SUCCESS: {
                return {
                    ...state,
                    laoding:false,
                    errors:null,
                    token:payload.token,
                    users:payload.user
                } 
            }
            case REGISTER_FAIL:
            case LOGIN_FAIL:
        return{
            ...state,payload:false,errors:payload,
        }
        default:
            return state
    }
}
export default reducer;