const BASE_API = 'https://localhost';

export default {
    checkToken:async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json({token});
        return json;
    },
    signIn:async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },
    signUp:async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json({name, email, password});
        return json;
    }

};