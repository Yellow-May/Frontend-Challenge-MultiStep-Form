<script lang="ts">
	export let stage: string;
	export let back: any | null = null;
	export let okText: string = 'Next Step';
</script>

<div
	class={`fixed bottom-[2%] left-0 w-full px-3 py-4 bg-white flex items-center md:absolute md:bottom-0 md:pl-10 md:pr-12 ${
		+stage > 1 ? 'justify-between' : 'justify-end'
	}`}
>
	{#if +stage > 1}
		<button
			title="Go Back"
			class="text-gray-100 p-2 text-sm hover:font-bold hover:text-blue-300"
			type="button"
			on:click={back}>Go Back</button
		>
	{/if}
	<button
		title={okText}
		class={`text-white px-4 py-2 rounded text-sm ${
			okText === 'Next Step' ? 'bg-blue-300' : 'bg-blue-200'
		}`}
		type="submit">{okText}</button
	>
</div>
