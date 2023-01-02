<script lang="ts">
	import ButtonGroup from '../UI/ButtonGroup.svelte';

	export let handle_submit: any;
	export let stage: string;
	export let back: any;
</script>

<form on:submit|preventDefault={handle_submit}>
	<slot />

	<ButtonGroup {stage} {back} />
</form>
