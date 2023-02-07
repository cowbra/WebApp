import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
// @ts-ignore
export async function load({ parent, url }) {
  // @ts-ignore
  const { user } = await parent();
  if (user) return redirect(307, '/');
  const para = url.searchParams.get('error');
  return { para };
}

/** @type {import('./$types').Actions} */
export const actions = {
  // @ts-ignore
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const user = {
      username: data.get('username'),
      password: data.get('password'),
    };

    const  { jwt } = await api.post('users/login', user);
    //console.log(jwt);

    if (jwt.errors) {
      return fail(401, jwt);
    }

    cookies.set('jwt', jwt.token, { path: '/' });
    throw redirect(307, '/locations');
    //return jwt;
  },
};
