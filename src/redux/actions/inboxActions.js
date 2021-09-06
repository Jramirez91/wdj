import { ADD_INBOX,GET_INBOX,ERROR_REQUEST} from '../types'
import { InboxService } from '../../common/api.services';

export const addInbox = data => ({
    type:ADD_INBOX,
    payload: {data}
})

export const getInbox = filter =>  async dispatch =>{
    try{
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