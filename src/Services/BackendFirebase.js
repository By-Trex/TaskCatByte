import * as firebase from 'firebase'
import React from 'react';

export const TABLES = {
    profiles: "users",

}

// const prefix = "functions-"
// const moment = require("moment");

// const FUNCTIONS = {
//     usernameExist: prefix + "usernameExist",
//     emailExist: prefix + "emailExist",
//     phoneNumberExist: prefix + "phoneNumberExist",
// }

//const API:ApisauceInstance = Api.create({baseURL:"http://localhost:5001/superlike-staging/us-central1"})
// export const API: ApisauceInstance = Api.create({ baseURL: "https://us-central1-superlike-staging.cloudfunctions.net" })

export class BackendFirebase extends React.Component {

    type = "firebase";
    tables = TABLES;

    // errorHandling(endpoint, response) {
    //     Loading.onLoading(false);

    //     console.log(`------------- ERROR (${endpoint}) ------------`)
    //     console.log(JSON.stringify(response));
    //     console.log("--------------------------------")
    // }

    // log(endpoint, response) {
    //     console.log(`------------- ${endpoint} ------------`)
    //     console.log(JSON.stringify(response));
    //     console.log("--------------------------------")
    // }

    // get(endpoint, success, fail) {
    //     Loading.onLoading(true);
    //     API.get(endpoint).then(response => {
    //         Loading.onLoading(false);

    //         this.log(endpoint, response);
    //         if (response.ok) {
    //             success(response.data);
    //         } else {
    //             this.errorHandling(endpoint, response);
    //             fail && fail(response);
    //         }
    //     }).catch(response => {
    //         this.errorHandling(endpoint, response);
    //         fail && fail(response);
    //     })
    // }

    // post(endpoint, data, success, fail) {


    //     API.post(endpoint, data).then(response => {

    //         this.log(endpoint, response);
    //         if (response.ok) {
    //             success(response.data);
    //         } else {
    //             this.errorHandling(endpoint, response);
    //             fail && fail(response);
    //         }
    //     }).catch(response => {
    //         this.errorHandling(endpoint, response);
    //         fail && fail(response);
    //     })
    // }

    createProfile(profile, id) {
        return new Promise(resolve => {
            firebase.firestore().collection(TABLES.profiles).doc(id).set(profile).then(response => {
                alert(response)
                resolve(true);
            }).catch(() => {
                resolve(null);
            })
        })
    }
}