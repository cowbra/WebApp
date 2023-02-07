/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    // @ts-ignore
    event.locals.jwt = jwt ? jwt : null;
    return resolve(event);
}