import {string, z} from "zod"

export const messageSchema=z.object({
   content:z
   .string()
   .min(10,{message:'Content must be at aleast of 10 character'})
   .max(300,{message:'contern must be no longer 300 characters'})
})