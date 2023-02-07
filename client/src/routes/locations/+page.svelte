<svelte:head>
    <title>Locations</title>
    <meta charset="UTF-8">

    <style>
        .button1 {
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

        .button1:hover{
            color:#000000;
            background-color:grey;
        }

        .button2 {
            position: absolute;
            top: 40px;
            left: 10px;
            margin: 0;
            padding: 10px 20px;
            background-color: lightgray;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        .button2:hover{
            color:#000000;
            background-color:grey;
        }


        html, body {
            margin: 30px;
            padding: 0;
        }

        
        
        @media all and (max-width:30em){
            .button1{
                display:block;
                margin:0.4em auto;
            }
        }

        .menu {
            font-family: sans-serif;
            background-color: ;
            width: 60%;
            height: 50px;
            position: absolute;
            left: 50%;
            top : 25%;
            transform: translate(-50%, -50%);
        }

        
        body {
            background-color: #212121;
            font-family: 'Raleway', sans-serif;
        }
        
        ul.gradient-list {
            list-style: none;
            margin: 1.75rem 0;
            padding-left: 1rem;
        }
        ul.gradient-list > li {
            background: #3f51b5;
            border-radius: 0 0.5rem 0.5rem 0.5rem;
            margin-top: 1rem;
            min-height: 3rem;
            padding: 1rem 1rem 1rem 3rem;
            position: relative;
        }
        
        .element-title-front{
            font-size: 18px;
            margin-top: -44px;
            margin-bottom: 10px;
            display: block;
            text-align: center;
        }

        .element-title-behind{
            display: block;
            font-size: 16px;
            margin-top: 20px;
            color: #000; 
            color: rgba(0, 0, 0, 0);
            text-align: center;
        }


        h1{
            text-align: center;
            font-size: 40px;
            margin-top: -20px;
            color: white;
        }

        h2{
            text-align: center;
            font-size: 20px;
            margin-top: 20px;
            color: grey;
        }

    </style>

</svelte:head>

<div id="json-data"></div>

<script>
    /** @type {import('./$types').ActionData} */
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
    let elements = data.body
    import * as api from '$lib/api.js';


    let role = JSON.parse(atob(data.jwt.split('.')[1])).role;

    /**
     * @param {string} id
     */
    async function deleteLocation(id) {
        let jwt = data.jwt
        await api.del('locations/'+id, jwt);
        
    };

</script>









<body class="location">
<a href="/logout" class="button1">Log Out</a>


<h1>Locations in Paris</h1>
<h2>Click on a movie to get its details.</h2>

{#if role=='admin'}
    <a href="/add" class="button2">Add a Location</a>
{/if}


<div class="menu">
<ul class="gradient-list">
    {#each elements as element}

        <li class="element">
            <p class="element-title-behind"><span class="element-span" on:click={() => {element.showDetails = !element.showDetails}}>{element.filmName} - ID : {element._id}</span></p>
            <p class="element-title-front" on:click={() => {element.showDetails = !element.showDetails}}>{element.filmName} - ID : {element._id}</p>

            {#if element.showDetails}
                {#if role=='admin'}


                <form use:enhance method="POST">

                    <label>_id : <input type="text" placeholder="_id" value={element._id} name="_id" readonly/></label>
                    <label><br>Film Type : <input type="text" placeholder="Film Type" value={element.filmType} name="filmType" required /></label>
                    <label><br>Film Producer Name :
                        <input type="text" placeholder="Film Producer Name" value={element.filmProducerName} name="filmProducerName" required /></label>
                    <label><br>End Date :
                        <input type="text" placeholder="End Date" value={element.endDate} name="endDate" required /></label>
                    <label><br>Film Name :
                        <input type="text" placeholder="Film Name" value={element.filmName} name="filmName" required  /></label>
                    <label><br>District : <input type="text" placeholder="District" value={element.district} name="district" required /></label>
                    <label><br>Source Location ID :
                        <input type="text" placeholder="Source Location ID" value={element.sourceLocationId} name="sourceLocationId" required /></label>
                    <label><br>Film Director Name :
                        <input type="text" placeholder="Film Director Name" value={element.filmDirectorName} name="filmDirectorName" required /></label>
                    <label><br>Adress :
                        <input type="text" placeholder="Address" value={element.address} name="address" required /></label>
                    <label><br>Start Date :
                        <input type="text" placeholder="Start Date" value={element.startDate} name="startDate" required /></label>
                    <label><br>Year :
                        <input type="text" placeholder="Year" value={element.year} name="year" required /></label>
                    <label><br>__v :
                        <input type="text" placeholder="__v" value={element.__v} name="__v" readonly/></label>
                    <button type="submit">Save Edit</button>


                </form>
                    <button on:click={deleteLocation(element._id)}>Delete</button>
                {/if}
                {#if role!='admin'}
                    <p><strong>_id: </strong>{element._id}</p>
                    <p><strong>Film Type: </strong>{element.filmType}</p>
                    <p><strong>Film Producer Name:</strong> {element.filmProducerName}</p>
                    <p><strong>End Date: </strong>{element.endDate}</p>
                    <p><strong>Film Name:</strong> {element.filmName}</p>
                    <p><strong>District:</strong> {element.district}</p>
                    <p><strong>Source Location ID:</strong> {element.sourceLocationId}</p>
                    <p><strong>Film Director Name: </strong>{element.filmDirectorName}</p>
                    <p><strong>Address: </strong>{element.address}</p>
                    <p><strong>Start Date:</strong> {element.startDate}</p>
                    <p><strong>Year: </strong>{element.year}</p>
                    <p><strong>__v:</strong> {element.__v}</p>
                {/if}
            {/if}
        </li>
    {/each}
</ul>
</div>

</body>