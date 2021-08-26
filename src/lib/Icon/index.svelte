<script lang="ts">
	// @ts-ignore
	import Icon from 'svelte-awesome'; // @ts-ignore
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let data: IconDefinition;
</script>

<Icon {data} />
