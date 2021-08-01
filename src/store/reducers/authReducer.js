const initialState = {

}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_ERROR":
            console.log("login error")
            return { 
                ...state, 
                authError: "The email or password is incorrect. Please try again."
            }
        case "LOGIN_SUCCESS":
            console.log("login success")
            return {
                ...state,
                authError: null,
            }
        case "SIGNOUT_SUCCESS":
            console.log("signout success")
            return {
                ...state,
            }
        case "SIGNUP_SUCEES":
            console.log("signup success")
            return {
                ...state,
                authError: null,
            }
        case "SIGNUP_ERROR":
            console.log("signup error")
            return {
                ...state,
                authError: action.err.message
            }
        default: 
            return state
    }
}

export default authReducer;