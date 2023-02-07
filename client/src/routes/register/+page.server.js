import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
// @ts-ignore
export async function load({ parent, url }) {
  // @ts-ignore
  const { user } = await parent();
  const para = url.searchParams.get('valid');

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

    const body = await api.post('users/register', user);
    if (body.errors) return fail(401, body);

    const value = btoa(JSON.stringify(body.user));
    cookies.set('jwt', value, { path: '/' });

    throw redirect(307, '/register?valid=true');
  },
};
