<script lang="ts">
	import { theme } from "./theme";
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Tinos" rel="stylesheet">
</svelte:head>
<ul>
	<li>
		<a href="/">
			<img src="/logo-{$theme}.svg" alt="Logo" class="bar-logo" />
		</a>
	</li>
	<!-- <li>
		<a href="/projects" class="bar-link">
			Projects
		</a>
	</li> -->
	<li>
		<a href="https://github.com/colin-heffernan" class="bar-link">
			GitHub
		</a>
	</li>
	<li>
		<a href="https://linkedin.com/in/colin-heffernan" class="bar-link">
			LinkedIn
		</a>
	</li>
	<li>
		<button class="bar-theme-toggle" on:click={theme.toggle}>
			<img src="/toggle-{$theme}.svg" alt="Theme toggler" class="bar-theme-toggle-icon" />
		</button>
	</li>
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
	}
	li {
		font-weight: bold;
	}
	li a {
		display: block;
		color: var(--text);
		text-align: center;
		text-decoration: none;
	}
	li a:hover {
		background-color: var(--bg-lightest);
	}
	.bar-logo {
		display: block;
		float: left;
		height: 40px;
		padding: 4px 10px 4px 10px;
	}
	.bar-logo:hover {
		background-color: var(--bg-lightest);
	}
	.bar-logo, .bar-link {
		float: left;
		font-size: 16pt;
	}
	.bar-link {
		padding: 14px 16px;
	}
	.bar-theme-toggle {
		background-color: #00000000;
		display: block;
		border-width: 0;
		float: right;
	}
	.bar-theme-toggle:hover {
		background-color: var(--bg-lightest);
	}
	.bar-theme-toggle-icon {
		float: right;
		height: 40px;
		padding: 4px 10px 4px 10px;
	}
</style>
