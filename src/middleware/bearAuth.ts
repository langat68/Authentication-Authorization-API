import "dotenv/config";
import {verify}from "hono/jwt"
import { Context, Next} from "hono";//  Types for handling request context and middleware flow
export interface TPayload {
    sub :string,
    role : string,
    exp :number
}// Defines the structure of the payload within the JWT,ie subject,role and expiration time


//authentication middleware
 export const verifyToken=async(token:string,secret:string) =>{
    try{
        const decoded=await verify(token,secret)
        return decoded;
    }catch(error:any){
        return null;
    }
 }

 //authorization middleware
 export const authMiddleware = async (c: Context, next: Next,requiredRole: string) =>{
    const token =c.req.header("Authorization");
   if(!token)return c.json({error: "token not provided"},401);
   const decoded=await verifyToken(token,process.env.JWT_SECRET as string);
   if(!decoded) return c.json({error:"invalid token"},401);

   if(decoded.role !== requiredRole) return c.json({error:"unauthorized"},401)
   return next();
 }

 
 // Role-specific middleware
 export const adminRoleAuth =async(c: Context,next: Next)=>await authMiddleware(c,next,"admin")
 export const userRoleAuth =async(c: Context,next: Next)=>await authMiddleware(c,next,"user")
 export const userAdminRoleAuth =async(c: Context,next: Next)=>await authMiddleware(c,next,"userAdmin")