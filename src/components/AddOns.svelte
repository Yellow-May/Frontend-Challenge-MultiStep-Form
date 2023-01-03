<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	let title = '';
	let desc = '';

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_submit = () => {};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit} />
