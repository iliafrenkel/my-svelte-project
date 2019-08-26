<script>
    import { slide } from 'svelte/transition';
    import Editor from './Editor.svelte';
    export let id;
    export let title;
    export let content = "";
    export let children = [];
    export let onBulletClick = () => {console.log('Bullet clicked.')};
    export let collapsed = true;

    let hovering;
	function enter() {
		hovering = true;
	}
	function leave() {
		hovering = false;
    }
    
    function toggle() {
        collapsed = !collapsed;
    }

</script>

<style>
    .note {
        padding: 0.25em;
        font-size: 1em;
        position: relative;
        border-radius: 0.5em;
    }
    .note:hover {
        background-color: #f8f8fa;
    }
    button {
        padding: 0;
        margin: 0;
        border: none;
    }
    .expand, .bullet {
        position: absolute;
        color: #555;
        display: inline-block;
    }
    .expand {
        background-color: transparent;
    }
    .bullet {
        width: 18px;
        height: 18px;
        left: 23px;
        top: 4.5px;
        border-radius: 50%;
        background-color: aliceblue;
    }
    .bullet:hover {
        background-color: lightblue;
    }
    .expand_icon {
        display: block;
        transition: transform 200ms ease 0s;
    }
    .expand_icon.down {
        transform: rotateZ(90deg);
    }
    .title {
        margin-left: 3em;
    }
    .content {
        margin-left: 3.5em;
        color: #777;
        font-size: 85%;
    }
    .children {
        margin-left: 1.5em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        border-left: dotted 1px #ccc;
    }
    .hidden {
        visibility: hidden;
    }
</style>

<div class="note" id={id}>
    <div class="header" on:mouseenter={enter} on:mouseleave={leave}>
        <button class="bullet" tabindex=-1 on:click={onBulletClick}>
            <svg viewBox="0 0 18 18" fill="currentColor">
                <circle cx="9" cy="9" r="3.5"></circle>
            </svg>
        </button>
        <button class="expand" tabindex=-1 class:hidden={!hovering} on:click={toggle}>
            <svg width="20" height="20" viewBox="0 0 20 20" class="expand_icon" class:down={!collapsed}>
                <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z" stroke="none" fill="currentColor"></path>
            </svg>
        </button>
        <div class="title">
            <Editor text={title}/>
        </div>
    </div>
    <div class="content">
        {#if content}
            <Editor text={content}/>
        {/if}
    </div>
    {#if !collapsed}
    <div class="children" transition:slide="{{duration:200}}">
        {#each children as note (note.id)}
            <svelte:self {...note} />
        {/each}
    </div>
    {/if}
</div>
