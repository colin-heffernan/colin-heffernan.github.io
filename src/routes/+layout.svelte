<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import { theme } from "../components/theme";
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Tinos" rel="stylesheet">
</svelte:head>
<Navbar />
<div style="height: 48px;"></div>
<slot />
<Footer />

{#if $theme === "dark"}
	<style lang="scss">
		:root {
			--bg-darker: #16161e;
			--bg-lighter: #1a1b26;
			--bg-lightest: #565f89;
			--highlight: #7aa2f7;
			--highlight-2: #7dcfff;
			--text: #c0caf5;
		}
	</style>
{:else}
	<style lang="scss">
		:root {
			--bg-darker: #e9e9eb;
			--bg-lighter: #d5d6db;
			--bg-lightest: #9699a3;
			--highlight: #34548a;
			--highlight-2: #0f4b6e;
			--text: #343b58;
		}
	</style>
{/if}

