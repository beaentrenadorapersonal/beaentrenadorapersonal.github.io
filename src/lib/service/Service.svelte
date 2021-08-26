<script lang="ts">
</script>

<div class="container">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		align-content: center;
		align-items: center;
	}

	.content {
		padding: 1em;
	}
</style>
