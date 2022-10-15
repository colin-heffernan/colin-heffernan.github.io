<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<main>
	<div class="error-container">
		{#if ready}
			<p class="error-title" in:fade="{{ duration: 1000 }}"><b>Error!</b></p>
			<p class="error-message" in:fade="{{ duration: 1000, delay:100 }}">
				It looks like you've found an error!
			</p>
			<p class="error-message" in:fade="{{ duration: 1000, delay: 200 }}">
				Obviously, this is bad and shouldn't
				<br>
				be happening.
			</p>
			<p class="error-message" in:fade="{{ duration: 1000, delay: 300 }}">
				Please let me know what you did
				<br>
				to encounter this error in
				<br>
				<a href="https://www.github.com/colin-heffernan/colin-heffernan.github.io/issues/">
					the issues section of my repo!
				</a>
			</p>
			<p class="error-message" in:fade="{{ duration: 1000, delay: 400 }}">
				Thanks for your help!
				<br>
				I appreciate it!
			</p>
			<p class="error-message" in:fade="{{ duration: 1000, delay: 500 }}">
				- Colin Heffernan
			</p>
		{/if}
	</div>
</main>

<style lang="scss">
	a {
		color: var(--highlight);
	}
	.error-container {
		align-items: center;
		background-color: var(--bg-lighter);
		display: flex;
		flex-direction: column;
		height: calc(100vh - 96px);
		justify-content: space-evenly;
		width: 100%;
	}
	.error-title {
		color: var(--highlight);
		font-size: 64pt;
	}
	.error-message {
		color: var(--text);
		font-size: 32pt;
		text-align: center;
	}
</style>
