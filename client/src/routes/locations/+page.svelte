<svelte:head>
    <title>Locations</title>
</svelte:head>

<div id="json-data"></div>

<script>
    /** @type {import('./$types').ActionData} */
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
    let elements = data.body
    import * as api from '$lib/api.js';
    let role = JSON.parse(atob(data.token.split('.')[1])).role;
    // @ts-ignore
    async function deleteLocation(id) {
        let token = data.token
        //const body = await api.get('/locations', token);
        await api.del('locations/'+id, token);
        location.reload()
    };
    function refreshWithDelay() {
        setTimeout(function(){
            window.location.replace(window.location.href);
        }, 1000);
    }
    let showAdd = false;
</script>


<body class="location">

<a href="/logout" class="button1">Log Out</a>


<h1>Locations</h1>

{#if role=='admin'}
    <button class="button2" on:click={() => {showAdd = !showAdd}}>Add a Location</button>
    {#if showAdd}

        <form use:enhance method="POST">

            <label>_id : <input type="text" placeholder="_id" name="_id" readonly/></label>
            <label><br>Film Type : <input type="text" placeholder="Film Type" name="filmType" required /></label>
            <label><br>Film Producer Name :
                <input type="text" placeholder="Film Producer Name" name="filmProducerName" required /></label>
            <label><br>End Date :
                <input type="text" placeholder="End Date" name="endDate" required /></label>
            <label><br>Film Name :
                <input type="text" placeholder="Film Name" name="filmName" required  /></label>
            <label><br>District : <input type="text" placeholder="District" name="district" required /></label>
            <label><br>Source Location ID :
                <input type="text" placeholder="Source Location ID" name="sourceLocationId" required /></label>
            <label><br>Film Director Name :
                <input type="text" placeholder="Film Director Name" name="filmDirectorName" required /></label>
            <label><br>Adress :
                <input type="text" placeholder="Address" name="address" required /></label>
            <label><br>Start Date :
                <input type="text" placeholder="Start Date"name="startDate" required /></label>
            <label><br>Year :
                <input type="text" placeholder="Year" name="year" required /></label>
            <label><br>__v :
                <input type="text" placeholder="__v" name="__v" readonly/></label>
            <button type="submit">Add a location</button>
        </form>

        {/if}
    {/if}
<div class="menu">
<ul class="gradient-list">
    {#each elements as element}

        <li class="element">
            <p class="element-title-behind"><span class="element-span" on:click={() => {element.showDetails = !element.showDetails}}>{element._id} - {element.filmName}</span></p>

            <p class="element-title-front" on:click={() => {element.showDetails = !element.showDetails}}>{element._id} - {element.filmName}</p>

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

                    <label><br>District : <input type="text" placeholder="District" value={element.district} name="district" required />
                    </label>

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
                    <button on:click={deleteLocation(element._id)}>Delete</button>

                </form>
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