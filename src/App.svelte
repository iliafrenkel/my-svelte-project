<script>
	import { onDestroy } from 'svelte';
	import { notes } from './store.js';
	import Button from './Button.svelte';
	import Note from './Note.svelte';
	export let name;
	let notes_data;
	let root = {
		id: 0,
		title: "Home",
		content: "",
		children: []
	};

	const unsubscribe = notes.subscribe(value => {notes_data = value});
	root.children = notes_data;
	onDestroy(unsubscribe);

	function drill_down(note) {
		console.log(note);
		return;
		if (note) {
			root = note;
		}
	}
</script>

<style>
	h1 {
		color: #333;
		text-align: center;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif, monospace;
		font-weight: 300;
	}
	h2 {
		color: #333;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif, monospace;
		font-weight: 400;
		font-size: 100%;
	}
	.notes-app {
		width: 900px;
		margin: 0 auto;
		padding: 1em;
	}
	.root-content {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif, monospace;
		font-weight: 300;
		font-size: 90%;
	}
</style>

<h1>{name} application</h1>
<div class="notes-app">
	<h2>{root.title}</h2>
	<p class="root-content">{root.content}</p>
	{#each root.children as note (note.id)}
		<Note
			id={note.id}
			title={note.title}
			content={note.content}
			children={note.children}
			onBulletClick={() => {root = note;}}
		/>
	{/each}

<!--
	<Note
		id="1"
		title="Ex ex id ea officia commodo id enim nisi do elit."
		content="Laboris ea officia veniam elit voluptate tempor consequat."
		collapsed={false}>
		<Note
			id="2"
			title="Voluptate ipsum pariatur aliquip ea magna aute."
			content="Minim do nostrud quis voluptate ea mollit officia fugiat quis aliqua do consequat aute."
		/>
	</Note>
	<Note
		id="3"
		title="Mollit sunt officia irure officia magna eiusmod commodo."
		content="Occaecat dolor cillum culpa excepteur sit."
	>
		<Note
			id="10"
			title="Elit ut amet ex in proident est nisi excepteur anim do duis qui dolor."
			content="Eu tempor magna sunt in consectetur. Voluptate ad veniam commodo irure tempor et nisi enim. Ad nisi elit proident excepteur. Occaecat incididunt laborum tempor aute id culpa minim nisi irure pariatur et dolore. Voluptate cillum sit ullamco aliquip sit cupidatat laboris deserunt do ipsum qui esse."
		/>
		<Note
			id="11"
			title="Labore amet consequat nostrud aute."
			content="Cillum nostrud ea nisi dolor ea quis proident eu laboris est voluptate laboris."
		>
			<Note
				id="12"
				title="Sunt minim reprehenderit sunt nulla velit fugiat mollit ea."
				content="Enim pariatur occaecat ut ut et minim dolor quis consequat esse sint adipisicing non."
			/>
		</Note>
	</Note>
	<Note
		id="4"
		title="Ex cupidatat ipsum occaecat velit sint ea esse consectetur consequat anim elit et irure."
		content="Sunt laborum esse tempor veniam quis dolore incididunt aliquip eu reprehenderit nulla consequat laborum cupidatat."
		>
		<Note
			id="5"
			title="Tempor reprehenderit enim aliquip ex eiusmod qui."
			content="Cillum cupidatat id excepteur et est laboris eu."
		/>
		<Note
			id="6"
			title="Nisi do eu elit eu eiusmod mollit tempor."
			content="Deserunt nostrud ea commodo minim labore sunt magna irure."
		/>
		<Note
			id="7"
			title="Occaecat pariatur anim ad amet et cillum."
			content="Voluptate dolor excepteur quis cillum nisi tempor do labore occaecat ad consequat mollit."
		/>
		<Note
			id="8"
			title="Consequat duis cillum magna aliqua sint elit irure id deserunt veniam occaecat eiusmod."
			content="Commodo quis ullamco nulla laboris ad sint aliqua eiusmod nostrud."
		/>
		<Note
			id="9"
			title="Proident minim enim voluptate eu."
			content="Tempor nostrud nulla Lorem dolore ex esse consectetur."
		/>
	</Note>
-->
</div>