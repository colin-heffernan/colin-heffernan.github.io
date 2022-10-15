<script lang="ts">
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Tinos" rel="stylesheet">
</svelte:head>
<ul>
	<li><a href="https://svelte.dev/">Made with love in <b>Svelte!</b></a></li>
	<li><a href="https://kit.svelte.dev/">Powered by <b>SvelteKit!</b></a></li>
	<li><a href="https://github.com/enkia/tokyo-night-vscode-theme"><b>Tokyo Night</b> themed!</a></li>
</ul>

<style lang="scss">
	ul {
		font-family: Tinos;
		background-color: var(--bg-darker);
		list-style-type: none;
		margin: 0;
		overflow: hidden;
		padding: 0;
		width: 100%;
		height: 48px;
	}
	li {
		float: left;
	}
	li a {
		display: block;
		color: var(--text);
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	li a:hover {
		background-color: var(--bg-lightest);
	}
</style>
