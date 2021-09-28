import {Auth0Client } from '@auth0/auth0-spa-js';

const AUTHENTICATION = 'POzthLa7C7OUA1d6xg68tuPwj6xZWqGv';

const auth0 = new Auth0Client({
  domain: 'ampdevgigslive.us.auth0.com',
  client_id: AUTHENTICATION,
  redirect_uri: window.location.origin
});


export async function signIn() {
  try{
    await auth0.getTokenSilently();
    return await auth0.getUser()
  }catch(error){
    await auth0.loginWithRedirect();
  }
}

export async function getUser() {
    await auth0.getTokenSilently();
    return await auth0.getUser()
}

export function logoutUser() {
  auth0.logout();
}