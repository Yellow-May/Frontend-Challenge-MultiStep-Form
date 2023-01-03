<script lang="ts">
	export let binder: boolean;
	export let options: string[];
	export let toggle: () => void;
</script>

<div
	class="flex items-center justify-center gap-5 py-4 mt-5 bg-magnolia rounded-md"
>
	<span class={`font-bold ${binder ? 'text-blue-300' : 'text-gray-100'}`}
		>{options[0]}</span
	>
	<div class="relative w-12 bg-blue-300 rounded-full">
		<input
			type="checkbox"
			checked={binder}
			on:change={toggle}
			class="w-full h-full opacity-0 cursor-pointer"
		/>
		<span
			class={`w-4 h-4 rounded-full pointer-events-none bg-white absolute top-1/2 left-1 -translate-y-1/2 transition-transform ${
				binder ? '' : 'translate-x-6'
			}`}
		/>
	</div>
	<span class={`font-bold ${!binder ? 'text-blue-300' : 'text-gray-100'}`}
		>{options[1]}</span
	>
</div>
