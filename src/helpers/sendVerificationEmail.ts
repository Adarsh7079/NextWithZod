import VerificationEmail from "../../emails/VerificationEmail"
import {resend} from "../lib/resend"
import { ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifycode:string
):Promise<ApiResponse> {

    try {

        await resend.emails.send({
            from :'onboarding@resen.dev',
            to:email,
            subject:'verification code message send',
            react:VerificationEmail({username,otp:verifycode}),
        });
        return {success:true,
            message:" verification mail send successfully "
        }
    } catch (emailError) {
        console.log("Error sending verification email",emailError)
        return {success:false,
            message:"Faild to send verification mail"
        }
    }
}
