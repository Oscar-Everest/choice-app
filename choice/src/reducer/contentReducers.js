import {CONTENT_LIST_REQUEST, CONTENT_LIST_SUCCESS, CONTENT_LIST_FAIL} from "../constants/contentConstants"

function contentListReducer(state = {contents: [] }, action){
    switch (action.type){
        case CONTENT_LIST_REQUEST:
        return{loading: true};
    case CONTENT_LIST_SUCCESS:
            return {loading: false, contents: action.payload};
            case CONTENT_LIST_FAIL:
                return {loading: false, error: action.payload}
                default:
                return state;   
    }
}

export  {contentListReducer}