import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
    return async (dispatch) => {
       try {
            const res = await axios.get('http://localhost:3001/users')
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
         } catch (error) {
            console.log(error)
        }
    }
}




