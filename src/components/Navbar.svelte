<script lang="ts">
	import { theme } from "./theme";
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
		<li in:fly="{{ y: -48, duration: 1440 }}">
			<a href="/">
				<img src="/logo-{$theme}.svg" alt="Logo" class="bar-logo" />
			</a>
		</li>
		<!-- <li>
			<a href="/projects" class="bar-link">
				Projects
			</a>
		</li> -->
		<li in:fly="{{ y: -48, duration: 1440, delay: 120 }}">
			<a href="https://github.com/colin-heffernan" class="bar-link">
				GitHub
			</a>
		</li>
		<li in:fly="{{ y: -48, duration: 1440, delay: 240 }}">
			<a href="https://linkedin.com/in/colin-heffernan" class="bar-link">
				LinkedIn
			</a>
		</li>
		<li in:fly="{{ y: -48, duration: 1440, delay: 360 }}">
			<button class="bar-theme-toggle" on:click={theme.toggle}>
				<img src="/toggle-{$theme}.svg" alt="Theme toggler" class="bar-theme-toggle-icon" />
			</button>
		</li>
	{/if}
</ul>

<style lang="scss">
	/* Taken mostly from W3Schools */
	ul {
		background-color: var(--bg-darker);
		font-family: Tinos;
		list-style-type: none;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: fixed;
		top: 0;
		width: 100%;
		height: 48px;
		li {
			font-weight: bold;
			a {
				transition: background-color 0.5s ease-out;
				display: block;
				color: var(--text);
				text-align: center;
				text-decoration: none;
				&:hover {
					background-color: var(--bg-lightest);
				}
			}
		}
	}
	.bar-logo {
		transition: background-color 0.5s ease-out;
		display: block;
		float: left;
		height: 40px;
		padding: 4px 10px 4px 10px;
		&:hover {
			background-color: var(--bg-lightest);
		}
	}
	.bar-logo, .bar-link {
		float: left;
		font-size: 16pt;
	}
	.bar-link {
		padding: 14px 16px;
	}
	.bar-theme-toggle {
		transition: background-color 0.5s ease-out;
		background-color: #00000000;
		display: block;
		border-width: 0;
		float: right;
		&:hover {
			background-color: var(--bg-lightest);
		}
	}
	.bar-theme-toggle-icon {
		float: right;
		height: 40px;
		padding: 4px 4px 4px 4px;
	}
</style>
