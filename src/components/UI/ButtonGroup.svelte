<script lang="ts">
	export let stage: string;
	export let back: any | null = null;
</script>

<div
	class={`fixed bottom-[2%] left-0 w-full px-3 py-4 bg-white flex items-center md:absolute md:bottom-0 md:pl-10 md:pr-12 ${
		+stage > 1 ? 'justify-between' : 'justify-end'
	}`}
>
	{#if +stage > 1}
		<button
			title="Go Back"
			class="text-gray-100 p-2 text-sm"
			type="button"
			on:click={back}>Go Back</button
		>
	{/if}
	<button
		title="Next Step"
		class="bg-blue-300 text-blue-50 px-4 py-2 rounded-md text-sm"
		type="submit">Next Step</button
	>
</div>
