<script lang="ts">
	export let reset: () => void;
</script>

<div class="h-full flex flex-col justify-center items-center gap-5 text-center">
	<h1 class="text-3xl font-extrabold text-blue-300">Thank you!</h1>
	<p class="text-sm text-gray-100">
		Thanks for confirming your subscription! We hope you have fun using our
		platform. If you ever need support, please feel free to email us at
		support@loremgaming.com
	</p>
	<button
		type="button"
		class="px-8 py-2 rounded bg-blue-200 text-white"
		on:click={reset}>Reset</button
	>
</div>
