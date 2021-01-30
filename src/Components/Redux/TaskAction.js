import axios from 'axios';

export const onFetchTask=()=>{
    return(dispatch)=>{
   return axios.get("http://jsonplaceholder.typicode.com/todos")
        .then(res=>{
            // console.log(res);
            
            if(res.status==200){
                    
                dispatch(onFetchSuccess(res.data))
                return res.data;
            }
            else{
                dispatch(onFetchFailure(res.data));
                return false;
            }
         })
        .catch(err=>{
            console.log(err);
            // dispatch(onFetchFailure(this.res.data));
        })
    }
}

export const onLogin=(Data,history)=>{
    return(dispatch)=>{
        if(Data.user_name==="admin123" && Data.password==="123456")
        {
           
            localStorage.setItem("userData", JSON.stringify(Data));
            dispatch(onLoginSuccess(Data));
            history.push("/task")
        }
        else{
            dispatch(onLoginFailure("Login failed"));
            history.push("/login")
        }
    }
}




export function addStudent(task)
{
    return {
    type:'ADD_STUDENT',
    payload:task
    }
}


export const onDeleteTask=(id)=>{
    return {
        type:'DELETE_TASK',
        payload:id
        }
}


export const onFetchSuccess=(data)=>{
    return {
        type:"FETCH_SUCCESS",
        payload:data,
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"FETCH_FAILURE",
        payload:msg,
    }
}


export const onLoginSuccess=(data)=>{
    return{
        type:'ON_LOGIN_SUCCESS',
        payload:data
    }
}

export const onLoginFailure=(msg)=>{
    return{
        type:'ON_LOGIN_FAILURE',
        payload:msg
    }
}
