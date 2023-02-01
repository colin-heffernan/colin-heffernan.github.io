<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	let ready = false;
	onMount((): void => {
		ready = true;
	});
</script>

<svelte:head>
	<title>Home - The Heffsite</title>
</svelte:head>
<main>
	<div class="intro-container">
		{#if ready}
			<p class="intro-text" in:fly="{{ x: -200, duration: 1440 }}">My name is<br><b class="intro-text-bold" >Colin Heffernan</b><br>and I write code.</p>
			<img src="/me.png" alt="Me!" class="intro-photo" in:fly="{{ x: 200, duration: 1440 }}"/>
		{/if}
	</div>
	<div class="about-me-container">
		{#if ready}
			<h1 class="about-me-title" in:fly="{{ y: 75, duration: 1440, delay: 360 }}">About Me</h1>
			<p class="about-me-text" in:fly="{{ y: 75, duration: 1440, delay: 480 }}">
				&emsp;&emsp;Hi! I'm Colin. I've been coding since 9th grade. It all started with
				a stupid little bot on Discord. It was a basic lottery system. Every night at
				midnight, a new winner was chosen out of every member of the server. It was
				badly written, but it was a start.
			</p>
			<p class="about-me-text" in:fly="{{ y: 75, duration: 1440, delay: 600 }}">
				&emsp;&emsp;Since then, I've taken on project after project, picking up new
				skills each time. I've learned to embrace learning new languages with passion
				and excitement. This is the mindset that allowed me to learn TypeScript and
				Haskell, and soon, Rust, Go, and C++.
			</p>
		{/if}
	</div>
	<div class="projects-container">
		{#if ready}
			<h1 class="projects-title" in:fly="{{ y: 75, duration: 1440, delay: 960 }}">Projects</h1>
			<div class="project-container" in:fly="{{ y: 75, duration: 1440, delay: 1080 }}">
				<h1 class="project-title">Pulsar Chat</h1>
				<p class="project-desc">A lightweight live chat application!<br>Written in Node.js and Svelte.</p>
				<div class="project-buttons">
					<a href="https://pulsarchat.vercel.app/" class="project-github-button">
						<p class="project-github-button-label">See it live on <b>Vercel!</b></p>
					</a>
				</div>
			</div>
			<div class="project-container" in:fly="{{ y: 75, duration: 1440, delay: 1200 }}">
				<h1 class="project-title">Lottobot</h1>
				<p class="project-desc">The newest iteration of the original project!<br>Now in TypeScript!</p>
				<div class="project-buttons">
					<a href="https://www.github.com/colin-heffernan/Lottobot" class="project-github-button">
						<p class="project-github-button-label">Open-sourced on <b>GitHub!</b></p>
					</a>
				</div>
			</div>
			<div class="project-container" in:fly="{{ y: 75, duration: 1440, delay: 1320 }}">
				<h1 class="project-title">HasFetch</h1>
				<p class="project-desc">A blazing-fast cross-platform fetch program!<br>Written in Haskell.</p>
				<div class="project-buttons">
					<div class="project-github-button">
						<p class="project-github-button-label">Not quite ready...<br>...yet!</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="contact-container">
		{#if ready}
			<h1 class="contact-title" in:fly="{{ y: 75, duration: 1440, delay: 1680 }}">Contact</h1>
			<div class="contact-method-container">
				<p class="contact-text" in:fly="{{ x: -200, duration: 1440, delay: 1800 }}">Email:</p>
				<p class="contact-text" in:fly="{{ x: 200, duration: 1440, delay: 1800 }}"><b style="color: var(--highlight);">colinpheffernan@gmail.com</b></p>
			</div>
			<div class="contact-method-container">
				<p class="contact-text" in:fly="{{ x: -200, duration: 1440, delay: 1920 }}">Discord:</p>
				<p class="contact-text" in:fly="{{ x: 200, duration: 1440, delay: 1920 }}"><b style="color: var(--highlight);">colin-heffernan#4704</b></p>
			</div>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		font-family: Tinos;
	}
	a {
		text-decoration: none;
	}
	.intro-container, .about-me-container,
	.projects-container, .contact-container {
		align-items: center;
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.about-me-container, .projects-container,
	.contact-container {
		flex-direction: column;
		justify-content: space-evenly;
	}
	.intro-container, .projects-container {
		background-color: var(--bg-lighter);
		transition: background-color 0.5s ease-out;
	}
	.about-me-container, .project-container,
	.contact-container {
		background-color: var(--bg-darker);
		transition: background-color 0.5s ease-out;
	}
	.intro-text {
		color: var(--text);
		font-size: min(5vw, 36pt);
		transition: color 0.5s ease-out;
		width: clamp(120px, 45%, 450px);
	}
	.intro-text-bold {
		font-size: min(6vw, 48pt);
		color: var(--highlight);
		transition: color 0.5s ease-out;
	}
	.intro-photo {
		width: clamp(120px, 45%, 450px);
		vertical-align: bottom;
	}
	.about-me-container {
		padding: 0 0 32px 0;
	}
	.about-me-title, .projects-title,
	.contact-title {
		color: var(--highlight);
		font-size: min(6vw, 36pt);
		margin: 16px;
		transition: color 0.5s ease-out;
	}
	.about-me-text {
		color: var(--text);
		font-size: min(4vw, 24pt);
		margin: 0px;
		transition: color 0.5s ease-out;
		width: clamp(300px, 60%, 1080px);
	}
	.project-container {
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		margin: 32px 0px;
		padding: 0px 16px;
		width: clamp(240px, 80%, 720px);
	}
	.project-title {
		color: var(--highlight);
		font-size: min(5vw, 30pt);
		margin: 16px 0 0 0;
		text-align: center;
		transition: color 0.5s ease-out;
	}
	.project-desc {
		color: var(--text);
		font-size: min(3vw, 18pt);
		margin: 16px 0;
		text-align: center;
		transition: color 0.5s ease-out;
	}
	.project-buttons {
		align-items: center;
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 16px;
		width: 100%;
	}
	.project-github-button {
		transition: background-color 0.5s ease-out;
		background-color: var(--highlight);
		border-radius: 16px;
		display: block;
		width: clamp(98px, 36%, 196px);
		padding: 0 16px; 
		&:hover {
			background-color: var(--highlight-2);
		}
	}
	.project-github-button-label {
		color: var(--bg-lighter);
		font-size: min(3vw, 18pt);
		text-align: center;
		transition: color 0.5s ease-out;
	}
	.contact-method-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: clamp(256px, 50%, 512px);
	}
	.contact-text {
		color: var(--text);
		font-size: min(4vw, 24pt);
		transition: color 0.5s ease-out;
	}
</style>
