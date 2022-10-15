<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	let ready = false;
	onMount((): void => {
		ready = true;
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Tinos" rel="stylesheet">
</svelte:head>
<ul>
	{#if ready}
		<li in:fly="{{ y: 48, duration: 1440 }}"><a href="https://svelte.dev/">Made with love in <b>Svelte!</b></a></li>
		<li in:fly="{{ y: 48, duration: 1440, delay: 120 }}"><a href="https://kit.svelte.dev/">Powered by <b>SvelteKit!</b></a></li>
		<li in:fly="{{ y: 48, duration: 1440, delay: 240 }}"><a href="https://github.com/enkia/tokyo-night-vscode-theme"><b>Tokyo Night</b> themed!</a></li>
	{/if}
</ul>

<style lang="scss">
	/* Taken mostly from W3Schools */
	ul {
		font-family: Tinos;
		background-color: var(--bg-darker);
		list-style-type: none;
		margin: 0;
		overflow: hidden;
		padding: 0;
		width: 100%;
		height: 48px;
		li {
			float: left;
			a {
				transition: background-color 0.5s ease-out;
				display: block;
				color: var(--text);
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
				&:hover {
					background-color: var(--bg-lightest);
				}
			}
		}
	}
</style>
