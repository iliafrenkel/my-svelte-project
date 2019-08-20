<script>
    export let text;
</script>

<style>
    [contenteditable] {
        font-family: Courier, monospace;
	}
</style>

<div contenteditable="true" bind:innerHTML={text}></div>