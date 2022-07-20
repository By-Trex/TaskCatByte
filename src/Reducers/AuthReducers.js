import {
    NAME_CHANGED,
    PHONE_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRMPASSWORD_CHANGED,
    DATE_CHANGED,
    GENDER_CHANGED,
    AVATAR_CHANGED,
    CREDIT_CHANGED,
    GET_TOKEN,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGN_APPLE,
    SIGN_FACEBOOK,
    HIDE_BAR,
    MODAL_VISIBLE,
    SIGNUPHEADERCHECKED_CHANGED,
    PROGRESSBAR_PER_CHANGED,
    WEIGHT_CHANGED,
    SIZE_CHANGED,
    FOOT_CHANGED,
    HEIGHT_CHANGED,
    EYES_CHANGED,
    SKIN_CHANGED,
    BEARD_CHANGED,
    HAIRSTYLE_CHANGED,
    HAİRCOLOR_CHANGED,
    HOMETAB_CHANGED
} from "../Actions/Types"

const INITIAL_STATE = {
    name: "",
    password: "",
    phone: "",
    email: "",
    confirmpassword: "",
    loading: false,
    date: "2016-05-15",
    gender: null,
    avatar: null,
    credit: 10,
    token: "",
    loading: false,
    modal_visible: false,
    signHeader: 0,
    progressBarPer: 0.33,
    height: 120,
    weight: 20,
    size: "XS",
    foot: 20,
    eyes: "",
    skin: "",
    beard: "",
    hairstyle: "",
    haircolor: "",
    hometab: 0


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, name: action.payload }
        case PHONE_CHANGED:
            return { ...state, phone: action.payload }
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case CONFIRMPASSWORD_CHANGED:
            return { ...state, confirmpassword: action.payload }
        case DATE_CHANGED:
            return { ...state, date: action.payload }
        case GENDER_CHANGED:
            return { ...state, gender: action.payload }
        case AVATAR_CHANGED:
            return { ...state, avatar: action.payload }
        case CREDIT_CHANGED:
            return { ...state, credit: action.payload }
        case GET_TOKEN:
            return { ...state, token: action.payload }
        case HIDE_BAR:
            return { ...state, hide: action.payload }
        case LOGIN_FAILED:
            return { ...state, loading: action.payload }
        case LOGIN_SUCCESS:
            return { ...state, loading: action.payload }
        case LOGIN:
            return { ...state, loading: action.payload }
        case MODAL_VISIBLE:
            return { ...state, modal_visible: action.payload }
        case SIGNUPHEADERCHECKED_CHANGED:
            return { ...state, signHeader: action.payload }
        case PROGRESSBAR_PER_CHANGED:
            return { ...state, progressBarPer: action.payload }
        case WEIGHT_CHANGED:
            return { ...state, weight: action.payload }
        case SIZE_CHANGED:
            return { ...state, size: action.payload }
        case FOOT_CHANGED:
            return { ...state, foot: action.payload }
        case HEIGHT_CHANGED:
            return { ...state, height: action.payload }
        case HAIRSTYLE_CHANGED:
            return { ...state, hairstyle: action.payload }
        case HAİRCOLOR_CHANGED:
            return { ...state, haircolor: action.payload }
        case EYES_CHANGED:
            return { ...state, eyes: action.payload }
        case SKIN_CHANGED:
            return { ...state, skin: action.payload }
        case BEARD_CHANGED:
            return { ...state, beard: action.payload }
        case HOMETAB_CHANGED:
            return { ...state, hometab: action.payload }
        case SIGN_APPLE:
            return { ...state }
        case SIGN_FACEBOOK:
            return { ...state }
        case "reset_data":
            return { ...state, name: "", phone: "", email: "", password: "", confirmpassword: "" }
        default:
            return state;
    }
}
