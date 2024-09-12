import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

//get all user Complaints

//query parameter=baseurl?key=value

export const getAllComplaintApi=async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/allcomplaints?search=${searchKey}`,"","")
}