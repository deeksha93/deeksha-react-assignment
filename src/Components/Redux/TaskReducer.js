const initialState={
    task:null,
    error:null,
    success_msg:null,
    isAuthenticate:false,
    user:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case "FETCH_SUCCESS":
            // console.log(action.payload)
                return{
                    ...state,
                  task:action.payload,
                  success_msg:true,
                  
                }

            case "FETCH_FAILURE":
                return{
                    ...state,
                    error:action.payload,
                }

             case "ON_LOGIN_SUCCESS":
            return{
                ...state,
                isAuthenticate:true,
                user:action.payload,
            }
        case "ON_LOGIN_FAILURE":
            return{
                ...state,
                error:action.payload
            }
           


        default:
            return state;
    }
}