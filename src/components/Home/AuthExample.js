// // auth example

// export const instance = () => {
//     return
//         axios.create({
//             baseURL: 'https://some-domain.com/api/',
//             timeout: 1000,
//             headers: {'X-Custom-Header': 'foobar'}
//         });
// }

// export const authAxios = (token) => {
//     return
//         axios.create({
//             baseURL: 'https://some-domain.com/api/',
//             timeout: 1000,
//             headers: {'Authentication': token}
//         });
// }

// authAxios("dkfjakdl;ahfid").put('/user', {text: "some text"}).then(res => {}).catch(err => console.log())

// // auth example 2.0

// import axios from 'axios';

// export const request = () => {
//   return axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//   })
// };

// export const requestWithAuth = token => {
//   return axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {
//       "Authentication": token
//     }
//   })
// };

// import React, { useEffect } from "react";
// import { Card } from "semantic-ui-react";
// import { request, requestWithAuth } from "../axiosRequests";

// const Smurf = props => {

//   useEffect( () => {

//     request().get( "/route" ).then( res => {
//       console.log( res );
//     } ).catch( err => {
//       console.log( err );
//     } );

//     request().post( "/post-route", { key: "value" } ).then( res => {
//       console.log( res );
//     } ).catch( err => {
//       console.log( err );
//     } );

//   }, [] );


//   requestWithAuth( "tokenGoesHere" )
//   .post( "/post-route", { key: "value" } )
//   .then( res => {
//     console.log( res );
//   } )
//   .catch( err => {
//     console.log( err );
//   } );