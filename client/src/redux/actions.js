import axios from "axios"
import {  GET_SPACE, GET_SPACE_FAIL, GET_SPACE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"



export const registerUser =(newUser)=>async(dispatch)=>{
    dispatch({
        type:REGISTER
    })
    try {
        const {data}= await axios.post('/user/register',newUser);
        localStorage.setItem('token',data.token);
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
    console.log(data)
    localStorage.setItem('token',data.token);
    dispatch({
        type : LOGIN_SUCCESS,
        payload: data
    })
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data
    });
}
}

export const getSpace = () => async(dispatch) => {
    const token = localStorage.getItem("token"); //heka li 3amartou fi localStorage (elli howa token)
    const config = {
        headers:{
            authorization:token
        }
    }
    dispatch({
        type:GET_SPACE
    })
    try {
    const {data} = await axios.get("/user/auth", config);
    dispatch({
            type: GET_SPACE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_SPACE_FAIL,
            payload: error.response.data,
        });
    }
};