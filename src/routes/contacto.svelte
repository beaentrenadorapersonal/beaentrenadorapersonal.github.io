<script lang="ts">
	import { title } from '../stores';

	title.set('Contacto');
</script>

<div class="flex-container-row">
	<div class="flex-item-50 contact-info">
		<h3>Si deseas más información no dudes en ponerte en contacto conmigo</h3>
	</div>

	<div class="flex-item-50">
		<iframe
			class="map"
			title="CEM Pau Gasol"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.870229055164!2d2.0225795157330366!3d41.35517430595384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49b99541fffcb%3A0x1c90c690fe7ee3f7!2sCEM%20PAU%20GASOL!5e0!3m2!1sen!2sse!4v1629472712406!5m2!1sen!2sse"
			style="border:0;"
			loading="lazy"
		/>
	</div>
</div>

<style>
	.contact-info {
		padding: 1em;
	}

	.map {
		width: 100%;
		height: 450px;
	}
</style>
