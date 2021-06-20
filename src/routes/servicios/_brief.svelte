<script lang="ts">
	export let link: string;
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let position: string;
	let left = position === 'left';
	let right = !left;
</script>

<div class:right class:left class="flex-container service">
	<img src={imgSrc} alt={imgAlt} />
	<div class="content'}}">
		<h3><a href={link}>{title}</a></h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.left {
		background: #ffebcc;
		flex-direction: row-reverse;
	}

	.right {
		background: #ccccff;
		align-content: right;
		align-items: right;
	}

	.service > div {
		width: 50%;
		padding: 1em;
	}

	.service > img {
		width: 50%;
	}

	@media (max-width: 700px) {
		.service > img {
			width: 100%;
		}

		.left,
		.right {
			flex-direction: column;
		}
	}
</style>
