<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
    export let data
</script>


<style>
    * {
        background-color: #F6F6F6;
    }

    form {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="text"],
    
    input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 4px solid #ccc;
        border-radius: 5px;
    }

    button[type="submit"] {
        width: 100%;
        padding: 10px;
        background-color: #3f51b5;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: grey;
    }

    

    h1{
        text-align: center;
        font-size: 40px;
        margin-top: 10px;
        color: black;
    }

    .return-main {
        position: absolute;
        top: 40px;
        right: 10px;
        margin: 0;
        padding: 10px 20px;
        background-color: lightgray;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    .return-main:hover{
        color:#000000;
        background-color:grey;
    }

    .location-added {
        font-size: 20px;
        color: green;
        text-align: center;
    }

</style>

<svelte:head>
    <title>Add a Location</title>
</svelte:head>

<body>
<h1>Add a Location</h1>
{#if data.para}
    <p class="location-added">Locations Added</p>
{/if}
    <form use:enhance method="POST">
        <label><br>Film Type : <input type="text" placeholder="Film Type" value="Long métrage" name="filmType" required /></label>
        <label><br>Film Producer Name :
            <input type="text" placeholder="Film Producer Name" value="MANDARIN PRODUCTION"name="filmProducerName" required /></label>
        <label><br>End Date :
            <input type="text" placeholder="End Date"  value="2020-08-21T00:00:00.000Z" name="endDate" required /></label>
        <label><br>Film Name :
            <input type="text" placeholder="Film Name"  value="Tuto bene" name="filmName" required  /></label>
        <label><br>District : <input type="text" placeholder="District"  value="75013" name="district" required /></label>
        <label><br>Source Location ID :
            <input type="text" placeholder="Source Location ID"  value="2020-404" name="sourceLocationId" required /></label>
        <label><br>Film Director Name :
            <input type="text" placeholder="Film Director Name"  value="Hugo Sanchez" name="filmDirectorName" required /></label>
        <label><br>Adress :
            <input type="text" placeholder="Address"  value="rue pascal, 75013 paris" name="address" required /></label>
        <label><br>Start Date :
            <input type="text" placeholder="Start Date" value="2020-07-20T00:00:00.000Z" name="startDate" required /></label>
        <label><br>Year :
            <input type="text" placeholder="Year"  value="2020" name="year" required /></label><br>
        <button type="submit">Add</button>
    </form>

<br>
<button onclick="window.location.href='/locations'" class="return-main">Return to Main</button>

</body>