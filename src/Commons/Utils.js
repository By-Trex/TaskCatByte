import {PermissionsAndroid, Platform} from "react-native";

export function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export  function getFirstname(name) {
    if (name) {
        return name.split(' ').slice(0, -1).join(' ');
    }
    return null;
}

export const hasAndroidCameraPermission = async ()=>{
    if (Platform === "ios") {
        return true;
    }

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message:"App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            return true;
        } else {
            console.log("Camera permission denied");
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}

export const hasAndroidPermission = async () => {
    if (Platform === "ios") {
        return true;
    }

    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}

export function firstNameLastName(fullName){
    var s = fullName.trim();
    var a = s.lastIndexOf(' '); // last occurence of space
    var b = s.substring(0, a); // Paul Steve
    var c = s.substring(a+1);
    return {firstname: b, lastname: c}
}

function get(path, obj, fb = `$\{${path}}`) {
    return path.split('.').reduce((res, key) => res[key] || fb, obj);
}

export function stringf(template, map, fallback) {
    return template.replace(/\$\{.+?}/g, (match) => {
        const path = match.substr(2, match.length - 3).trim();
        return get(path, map, fallback);
    });
}

export function isEmptyText(text){
    return !(text && text.length > 0);
}