<script>
    let count = 0;

    function handleClick() {
        count += 1;
    }
</script>

<style>
    button {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5em;
        padding: .5em 2em;
        margin: 1em 2em;
        border-radius: .25em;
        background-color:lightsteelblue;
        border-color: darkslateblue;
        box-shadow: 4px 2px 6px 1px #ccc;
    }
    button:active {
        box-shadow: none
    }
</style>

<button on:click={handleClick}>
    -=[{count}]=-
</button>