import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
// @ts-ignore
export async function load({ parent, url }) {
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

    const { errors, token } = await api.post('users/login', user);

    if (errors) {
      return fail(401, { errors });
    }

    cookies.set('jwt', token, { path: '/' });
    return redirect(307, '/locations');
  },
};
