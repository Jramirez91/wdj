import { GET_INBOX,ADD_INBOX} from '../types';


const initialState = {
    all: [],
    first:"",
    last:"",
    next:undefined,
    loading:false
};

export default function(state = initialState, action){

    switch(action.type){

        case GET_INBOX:
            return {
                ...state,
                all:action.payload.data,
                first:action.payload.first_page_url,
                last:action.payload.last_page_url,
                next:action.payload.next_page_url,
                loading:false

            }
       
        default: return state
    }

}