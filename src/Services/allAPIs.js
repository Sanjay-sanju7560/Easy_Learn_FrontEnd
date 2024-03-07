import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// register api 
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
    }
 
// teacher api 
export const teacherAPI = async (teacher)=>{
    return await commonAPI("POST",`${SERVER_URL}/teacher`,teacher,"")
    }

// login api 
   export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
    }

    //teacher login api 
   export const tchrloginAPI = async (teacher)=>{
    return await commonAPI("POST",`${SERVER_URL}/teacherLogin`,teacher,"")
    }

     // add course api 
     export const uploadAPI = async (course)=>{
        return await commonAPI("POST",`${SERVER_URL}/upload`,course,"")
        }

// // all project  api 

export const getAllCourseAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-courses`,"","")
 }
 

