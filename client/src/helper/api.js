import axios from 'axios'
// axios.defaults.baseURL = process.env.REACT_APP_DEV_SERVER;


export async function register(values) {

    try {
        console.log(values);
        localStorage.setItem("username", values.firstname)
        const data = await axios.post('http://localhost:4000/api/v1/user/register', values)

        return data.data
    } catch (error) {
        return error
    }

}

export async function login(values) {
    try {
        let data = await axios.post('http://localhost:4000/api/v1/user/login', values);
        return data.data.message
    } catch (error) {
        return error
    }
}


export async function createNewContract(values) {
    try {
        let username = localStorage.getItem("username")
        values = await Object.assign(values, { username: username || '' })
        const data = await axios.post('http://localhost:4000/api/v1/contract/createcontract', values);
        return data.data
    } catch (error) {
        return error
    }
}

export async function getContract() {
    try {
        const data = await axios.get('http://localhost:4000/api/v1/contract/getcontract')
        return data.data;
    } catch (error) {
        return error
    }
}


export async function setActivity(values) {
    try {
        const data = await axios.post('http://localhost:4000/api/v1/activity/setactivity', values)
        return data;
    } catch (error) {
        return error
    }
}

export async function updateActivity(values){
    try {
        console.log(values);
         const data = await axios.put('http://localhost:4000/api/v1/activity/updateactivity', values)
         return data;
     } catch (error) {
         return error
     }
}
export async function getActivity() {
    try {
        let username = localStorage.getItem("username")
        const data = await axios.get('http://localhost:4000/api/v1/activity/getactivity', {
            params: {
                username: username
            }
        })
        return data
    } catch (error) {
        return error
    }
}



export async function setbankdetails(values){
    try {
        let username = localStorage.getItem("username")
        values = await Object.assign(values, { username: username || '' })
        const data = await axios.post('http://localhost:4000/api/v1/bank/setbankdetails', values);
        return data.data
    } catch (error) {
        return error
    } 
}


export async function getbankdetails(){
    try {
        let username = localStorage.getItem("username")
        const data = await axios.get('http://localhost:4000/api/v1/bank/getbankdetails', {
            params: {
                username: username
            }
        })
        return data
    } catch (error) {
        return error
    } 
}