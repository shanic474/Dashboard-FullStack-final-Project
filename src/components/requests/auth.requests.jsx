import axios from 'axios';

async function loginUser(formData)  {
    return await axios.post('/api/users/login', formData);
}

export { loginUser };