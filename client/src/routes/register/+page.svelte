<script>
    import { enhance } from '$app/forms';
    export let form;
    export let data
</script>

<svelte:head>
    <title>Sign in</title>
</svelte:head>

<body>
    <div class="login-form">
        <h1>Register</h1>
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
                {#if data.para === 'true'}
                    <p>User created</p>
                {/if}
            </div>
            <div class="action">
                <button type="submit">Register</button>
                <button on:click="window.location.href='/login'">Sign In</button>
            </div>

        </form>
    </div>
</body>
