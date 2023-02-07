import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({parent }) {
    // @ts-ignore
    const { user } = await parent();
    throw redirect(307, '/locations');
}