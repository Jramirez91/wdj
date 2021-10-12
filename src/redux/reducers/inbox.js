import { GET_INBOX,ADD_INBOX,ERROR_REQUEST,START_REQUEST} from '../types';


const initialState = {
    all: [],
    first:"",
    last:"",
    next:undefined,
    loading:false
};

export default function inbox(state = initialState, action){

    switch(action.type){

        case START_REQUEST:
            return{
                ...state,
                loading:true
            }

        case GET_INBOX:
            return {
                ...state,
                all:action.payload.data,
                first:action.payload.first_page_url,
                last:action.payload.last_page_url,
                next:action.payload.next_page_url,
                loading:false

            }
        case ADD_INBOX:
            return {
                ...state,
                loading:false
            }
            case ERROR_REQUEST:
                console.error(action);
                break;
       
        default: return state
    }

}