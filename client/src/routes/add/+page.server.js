
import { redirect, fail } from '@sveltejs/kit';
import * as api from '$lib/api.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,url }) {
    let jwt = locals.jwt
    if(jwt==null)
    {
        throw redirect(307, '/login');
    }
    let role = JSON.parse(atob(jwt.split('.')[1])).role;

    //On verifie le role de l'user
    if(role!='admin'){
        throw redirect(307, '/locations');
    }
    let para = url.searchParams.get('success')
    return {para}
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request,locals }) => {

        const data = await request.formData();

        const user = {
            filmType : data.get('filmType'),
            filmProducerName : data.get('filmProducerName'),
            endDate : data.get('endDate'),
            filmName : data.get('filmName'),
            district : data.get('district'),
            sourceLocationId : data.get('sourceLocationId'),
            filmDirectorName : data.get('filmDirectorName'),
            address : data.get('address'),
            startDate : data.get('startDate'),
            year : data.get('year'),
        };

        const body = await api.post('locations/', user,locals.jwt);

        if (body.errors) {
            return fail(401, body);
        }
        throw redirect(307, '/add?success=true');


    }
};




