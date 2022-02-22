import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'IS_SIDEBAR_OPEN':
            return {
                ...state,
                sidebar: action.payload,
                sidebarCustomClass: action.payload ? "d-block" : "",
                chatCustomClass: ""
            };
        case 'IS_CHAT_SECTION_OPEN':
            return {
                ...state,
                chatSection: action.payload,
                chatCustomClass: action.payload ? "d-block" : "",
                sidebarCustomClass: ""
            };
        default:
            return state
    }
}

const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer,
        {
            sidebar: false,
            customClass: ""
        })
    return { globalState, globalDispatch }
};


export default useGlobalState;
