import { CONTENT_LIST_REQUEST, CONTENT_LIST_SUCCESS, CONTENT_LIST_FAIL, CONTENT_DETAILS_REQUEST, CONTENT_DETAILS_SUCCESS, CONTENT_DETAILS_FAIL }  from "../constants/contentConstants";
import axios from "axios";


const listContents = () => async (dispatch) => {
    try{
        dispatch({type: CONTENT_LIST_REQUEST});
        const {data} = await axios.get("/api/contents");
        dispatch({type: CONTENT_LIST_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({type: CONTENT_LIST_FAIL, payload: error.message})
    }
    
}
const detailsContent = (contentUserHandle) => async(dispatch) =>{
    try {
        dispatch({type: CONTENT_DETAILS_REQUEST, payload: contentUserHandle});
        const { data } = await axios.get("api/contents/" + contentUserHandle);
        dispatch({type: CONTENT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: CONTENT_DETAILS_FAIL, payload: error.message});
    }
}

export{ listContents, detailsContent }