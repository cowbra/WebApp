/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
    return {
        jwt: locals.jwt
        }
};