import {error, redirect} from '@sveltejs/kit';

export const base = 'http://localhost:5000';

// @ts-ignore
async function send({ method, path, data, token }) {
    const opts = { method, headers: {} };

    if (data) {
        // @ts-ignore
        opts.headers['Content-Type'] = 'application/json';
        // @ts-ignore
        opts.body = JSON.stringify(data);
    }

    if (token) {
        // @ts-ignore
        opts.headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${base}/${path}`, opts);
    //console.log(res);
    if (res.status == 200 || res.status === 201) {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }
    if(res.status === 401){
        if(method==='POST'){
            throw redirect(302, `/login?error=true`);
        }
        throw redirect(302, `/login`);
    }
    if(res.status === 403){
        throw redirect(302, `/login`);
    }
    if(res.status === 400){
        throw redirect(302, `/login`);
    }


    throw error(res.status);
}

// @ts-ignore
export function get(path, token) {
    // @ts-ignore
    return send({ method: 'GET', path, token });
}

// @ts-ignore
export function del(path, token) {
    // @ts-ignore
    return send({ method: 'DELETE', path, token });
}

// @ts-ignore
export function post(path, data, token) {
    return send({ method: 'POST', path, data, token });
}

// @ts-ignore
export function put(path, data, token) {
    return send({ method: 'PUT', path, data, token });
}