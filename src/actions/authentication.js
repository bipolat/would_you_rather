import { SIGNIN, SIGNOUT } from "../utils/helper";

export function login(id) 
{return {type: SIGNIN,id};}

export function logout() 
{return {type: SIGNOUT};}