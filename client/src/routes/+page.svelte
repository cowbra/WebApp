
<script>
    import { goto } from '$app/navigation';
  
    function handleLogin() {
      goto('/login');
    }
  
    function handleRegister() {
      goto('/register');
    }
  
    function handleLocations() {
      goto('/locations');
    }
  </script>
  
  
  <body class="home">

    <h1>Frontend Web Applications</h1>
    
    <div class="buttons">
        <button on:click={handleLogin}>Login</button>
        <button on:click={handleRegister}>Register</button>
        <button on:click={handleLocations}>Locations</button>
    </div>
  </body>
  
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
      position: relative;
    }
  
    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    h1 {
      text-align: center;
      font-size: 36px;
      margin-bottom: 10px;
      color: white;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    button {
      margin: 20px;
      padding: 20px;
      background-color: #3f51b5;
      border: none;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
  
  </style>
  