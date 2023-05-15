import axios from "axios"
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"



export const registerUser =(newUser)=>async(dispatch)=>{
    dispatch({
        type:REGISTER
    })
    try {
        const {data}= await axios.post('/user/register',newUser);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data
        })
    }
};
export const loginUser = (user)=> async(dispatch)=>{
dispatch({
    type:LOGIN
})
try {
    const {data} = await axios.post('/user/login',user);
    localStorage.setItem('token',data.token);
    dispatch({
        type : LOGIN_SUCCESS,
        payload: data.user
    })
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data
    });
}
}