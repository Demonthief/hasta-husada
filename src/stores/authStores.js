// import { defineStore } from "pinia"
// import { ref } from "vue"
// import customFetch from "../api"
// import axios from "axios"

// export const useAuthStore = defineStore('user', () => {
//     const dialog = ref(false)
//     // const errorMsg = ref(null)
//     // const errorAlert = ref(false)

//     const loginUser =async (inputData) =>{
//         try{
//             const { data } = await customFetch.post('/login', {
//                 email: inputData.email,
//                 password: inputData.password
//             }) 
//             console.log(inputData)
//             // dialog.value = false;
//             // const res = await axios.get('http://localhost:3000/api/v1/auth/test')
//             console.log(data)
            
//         }catch(error){
//             // errorAlert.value = true
//             // errorMsg.value = error.response.data.message
//             console.log(error)
//         }
//     }
  
//     return { dialog, loginUser}
//   })