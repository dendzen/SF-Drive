import JWTdecode from 'jwt-decode';

export const ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
const REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';
const MILLISECONDS_IN_SECOND = 1000;
const ACCESS_TOKEN_UPDATAE_DIFF = 60;
const REFRESH_SERVER_ADDRESS = "http://localhost:8000/authorization/refresh";
const AUTH_SERVER_ADDRESS = "http://localhost:8000/authorization/send";

export const writeTokens = function(access, refresh) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refresh);
};