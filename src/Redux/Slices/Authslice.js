import {createSlice} from '@reduxjs/toolkit';
const authSlice  =  createSlice({
    name:"auth",
    initialState:{
        isloggedin:false,
        toggle:true,
        userDetails:[]
    },
    reducers:{
        LogginAuth(state){
             state.isloggedin =! state.isloggedin
        },
        Deposit(state){
            state.toggle =! state.toggle
        },
        Createaccount(state, action){
            const newUser = action.payload;
            const existingId = state.userDetails.find((items) => items.userId === newUser.userid);
            const existingemail = state.userDetails.find((items) => items.email === newUser.email);
            const existingphone = state.userDetails.find((items) => items.phone === newUser.phone);
            if(existingId){
                alert("User already exist")
            }
            else if(existingemail){
                alert("user already exist with this email");
            }
            else if(existingphone){
                alert("user already exist with is phone number");
            }
           else{
            state.userDetails.push({
                userId:newUser.userId,
                username:newUser.username,
                password:newUser.password,
                email:newUser.email,
                phone:newUser.phone,
             })
             alert('Account created succesfully');
           }
        },
        LoginAccount(state, action){
            state.isloggedin = true;
        }
    }
})
export const toggleState = (state) => state.auth.toggle
export const loggedin = (state) => state.auth.isloggedin
export const authactions = authSlice.actions
export default authSlice.reducer;