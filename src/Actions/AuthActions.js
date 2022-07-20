import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    PHONE_CHANGED,
    NAME_CHANGED,
    CONFIRMPASSWORD_CHANGED,
    DATE_CHANGED,
    GENDER_CHANGED,
    AVATAR_CHANGED,
    CREDIT_CHANGED,
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

} from './Types';


export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const phoneChanged = (phone) => {
    return {
        type: PHONE_CHANGED,
        payload: phone
    }
}

export const nameChanged = (name) => {
    return {
        type: NAME_CHANGED,
        payload: name
    }
}

export const confirmpasswordChanged = (confirmpassword) => {
    return {
        type: CONFIRMPASSWORD_CHANGED,
        payload: confirmpassword
    }
}

export const dateChanged = (date) => {
    return {
        type: DATE_CHANGED,
        payload: date
    }
}

export const genderChanged = (gender) => {
    return {
        type: GENDER_CHANGED,
        payload: gender
    }
}

export const avatarChanged = (avatar) => {
    return {
        type: AVATAR_CHANGED,
        payload: avatar
    }
}

export const creditChanged = (credit) => {
    return {
        type: CREDIT_CHANGED,
        payload: credit
    }
}

export const getToken = (token) => {
    return {
        type: get_Token,
        payload: token
    }
}

export const resetData = () => {
    return {
        type: "reset_data",
        payload: null,
    }
}

export const hideBar = (hide) => {
    return {
        type: HIDE_BAR,
        payload: hide
    }
}

export const LoadingChanged = (type, loading, dispatch) => {
    dispatch({
        type: type,
        payload: loading
    })
}



export const loginClicked = (email, password) => {
    return async (dispatch) => {
        LoadingChanged(LOGIN, true, dispatch)
        try {
            // firebase.auth().signInWithEmailAndPassword(email, password)
            //     .then(() => {
            //         LoadingChanged(LOGIN_SUCCESS, false, dispatch)
            //         Actions.Main()
            //     })
            //     .catch(() => {
            //         LoadingChanged(LOGIN_FAILED, false, dispatch)
            //         alert('Your email or password is incorrect')
            //     })

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const ForgotPasswordClicked = (email) => {
    return async (dispatch) => {
        LoadingChanged(LOGIN, true, dispatch)
        try {
            // firebase.auth().sendPasswordResetEmail(email)
            //     .then(() => {
            //         LoadingChanged(LOGIN_SUCCESS, false, dispatch)
            //         alert("please check your junk mail box"),
            //             Actions.Login()
            //     })
            //     .catch(() => {
            //         LoadingChanged(LOGIN_FAILED, false, dispatch)
            //         alert("Unsuccess process , plase try again ")
            //     })
        } catch (error) {
            console.log(error)
        }
    }
}

export const ModalVisibleControl = (hide) => {
    return {
        type: MODAL_VISIBLE,
        payload: hide
    }
}

export const ProgressBarPerChanged = (progressPer) => {
    return {
        type: PROGRESSBAR_PER_CHANGED,
        payload: progressPer
    }
}


export const SignupHeaderCheckedChanged = (checked) => {
    return {
        type: SIGNUPHEADERCHECKED_CHANGED,
        payload: checked
    }
}

export const WeightChanged = (weight) => {
    return {
        type: WEIGHT_CHANGED,
        payload: weight
    }
}

export const SizeChanged = (size) => {
    return {
        type: SIZE_CHANGED,
        payload: size
    }
}

export const FootChanged = (foot) => {
    return {
        type: FOOT_CHANGED,
        payload: foot
    }
}

export const HairColorChanged = (hair_color) => {
    return {
        type: HAİRCOLOR_CHANGED,
        payload: hair_color
    }
}

export const HairStyleChanged = (hair_style) => {
    return {
        type: HAIRSTYLE_CHANGED,
        payload: hair_style
    }
}


export const BeardChanged = (beard) => {
    return {
        type: BEARD_CHANGED,
        payload: beard
    }
}


export const SkinChanged = (skin) => {
    return {
        type: SKIN_CHANGED,
        payload: skin
    }
}


export const EyesChanged = (eyes) => {
    return {
        type: EYES_CHANGED,
        payload: eyes
    }
}

export const homeTabChanged = (hometab) => {
    return {
        type: HOMETAB_CHANGED,
        payload: hometab
    }
}

