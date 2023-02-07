<script>
    import { enhance } from '$app/forms';
    /**
     * @type {{ para: any; }}
     */
     export let data;
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<body class="login">
    {#if data.para}
      <p class="error-message">Incorrect Password</p>
    {/if}
  
    <div class="login-form">
      <h1>Login</h1>
      <form use:enhance method="POST">
        <div class="content">
          <div class="input-field">
            <input
              name="username"
              type="text"
              required
              placeholder="Username"
            />
          </div>
          <div class="input-field">
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
        </div>
        <div class="action">
          <button type="submit">Sign up</button>
          <button on:click={() => window.location.href='/register'}>Register</button>
        </div>
      </form>
    </div>
  </body>
  