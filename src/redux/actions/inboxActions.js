import { ADD_INBOX,GET_INBOX,ERROR_REQUEST, START_REQUEST} from '../types'
import { InboxService } from '../../common/api.services';

export const addInbox = data => ({
    type:ADD_INBOX,
    payload: {data}
})

export const getInbox = filter =>  async dispatch =>{
    
    try{
        dispatch({
            type: START_REQUEST,
            payload: true,
        })
        const res = await InboxService.query();
        dispatch({
            type:GET_INBOX,
            payload: res.data
        })
    }catch(e){
        dispatch({
            type:ERROR_REQUEST,
            payload: console.error(e)
        })
    }
}

export const setInbox = data => async dispatch =>{
    try{
        dispatch({
            type: START_REQUEST,
            payload: true,
        })
        const res = await InboxService.create(data);
        dispatch({
            type:ADD_INBOX,
            payload: res.data
        })
    }catch(e){
        console.error(e);
        dispatch({
            type:ERROR_REQUEST,
            payload: console.error(e)
        })
    }
}