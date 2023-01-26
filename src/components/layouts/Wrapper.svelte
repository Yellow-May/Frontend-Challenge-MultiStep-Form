<script lang="ts">
	import ButtonGroup from '../UI/ButtonGroup.svelte';

	export let title: string;
	export let desc: string;
	export let handle_submit: any;
	export let stage: string;
	export let back: any;
	export let okText: string | undefined = undefined;
</script>

<h1 class="font-bold text-2xl text-blue-300 mb-2">{title}</h1>
<p class="text-gray-100 tracking-wide mb-7">
	{desc}
</p>

<form on:submit|preventDefault={handle_submit}>
	<slot />

	<ButtonGroup {stage} {back} {okText} />
</form>
