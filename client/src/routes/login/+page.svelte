<script>
    import { enhance } from '$app/forms';
    /**
     * @type {{ para: any; }}
     */
     export let data;

</script>

<svelte:head>
    <title>Login</title>
    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
    
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #212121;
        }
    
        .login-form {
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 20px 25px rgba(0,0,0,0.1);
            width: 400px;
            text-align: center;
        }
    
        h1 {
            margin-bottom: 30px;
            font-size: 2em;
            color: #333;
        }
    
        .input-field {
            margin-bottom: 20px;
            position: relative;
        }
    
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            font-size: 1.2em;
            border: none;
            border-bottom: 2px solid #333;
            transition: all 0.2s ease-in-out;
        }
    
        input[type="text"]:focus, input[type="password"]:focus {
            outline: none;
            border-bottom: 2px solid #3f51b5;
        }
    
        .action {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
    
        button[type="submit"] {
            padding: 10px 20px;
            background-color: #3f51b5;
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 1.2em;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
    
        button[type="submit"]:hover {
            background-color: #333;
        }
    
        button[type="button"] {
            padding: 10px 20px;
            background-color: #fff;
            color: #333;
            border: 2px solid #333;
            border-radius: 25px;
            font-size: 1.2em;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            margin-left: 10px;
        }
    
        button[type="button"]:hover {
            background-color: #333;
            color: #fff;
        }
    
        p {
            margin-top: 20px;
            color: #3f51b5;
            font-size: 1.2em;
        }
    </style>
</svelte:head>

<body class="login">
    {#if data.para}
    
      <p class="error-message"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Incorrect Password   </p>
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
          <button type="submit">Login</button>
          <button on:click={() => window.location.href='/register'}>Register</button>
        </div>
      </form>
    </div>
  </body>
  