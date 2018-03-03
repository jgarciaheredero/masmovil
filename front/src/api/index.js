const apiUrl = 'http://localhost:3000';

const API = {
    phones: {
        async getAllPhones() {
            const res = await fetch(`${apiUrl}/phones`)
            const data = await res.json();
            return data
        }
    }
}

export default API;