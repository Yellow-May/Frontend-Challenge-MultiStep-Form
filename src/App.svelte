<script lang="ts">
	import ButtonGroup from './components/ButtonGroup.svelte';
	import { navitems, form_fields } from './helpers';

	export let data = { stage: '1' };
	let errors: any;
	form_fields.forEach(e => (errors = { ...errors, [e.id]: false }));

	const handle_submit = (
		e: Event & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		const form_data = new FormData(e.target as HTMLFormElement);
		form_fields.forEach(
			e => (errors = { ...errors, [e.id]: !form_data.get(e.id) })
		);
	};
</script>

<div
	class="font-ubuntu h-full md:flex md:items-center md:justify-center md:bg-magnolia"
>
	<!-- card -->
	<div
		class="w-full h-full p-2 rounded-md shadow bg-magnolia md:max-w-[95%] md:max-h-[90%] md:w-[878px] md:h-[568px] md:grid md:grid-cols-3 md:gap-8 md:p-3 md:bg-white md:shadow-lg"
	>
		<!-- left -->
		<div
			class="bg-[image:url('/assets/bg-sidebar-mobile.svg')] md:bg-[image:url('/assets/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover absolute top-0 left-0 w-full h-[20%] max-h-[172px] md:relative md:col-span-1 md:h-full md:min-h-full md:rounded-lg"
		>
			<ul
				class="flex items-center justify-center gap-5 mt-[7%] md:mt-0 md:flex-col md:justify-start md:items-start md:gap-8 md:py-8 md:px-[10%] md:h-full"
			>
				{#each navitems as navitem}
					<li class="md:flex md:gap-3 md:items-center">
						<span
							class={`${
								navitem.id === data.stage
									? 'text-blue-300 bg-blue-50'
									: 'text-white border'
							} font-semibold text-sm w-9 h-9 flex items-center justify-center rounded-full md:w-10 md:h-10`}
							>{navitem.id}</span
						>
						<div
							class="hidden md:block md:space-y-1 md:uppercase md:tracking-wider"
						>
							<span class="text-gray-100 text-xs font-semibold block"
								>{`Step ${navitem.id}`}</span
							>
							<h5 class="text-white font-bold text-sm">{navitem.label}</h5>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- right -->
		<div
			class="relative z-10 md:col-span-2 w-full rounded-lg bg-white px-5 py-8 mt-[25%] md:mt-0 md:h-full md:bg-[transparent] md:pl-10 md:pr-12"
		>
			<h1 class="font-bold text-2xl text-blue-300 mb-2">Personal Info</h1>
			<p class="text-gray-100 tracking-wide mb-7">
				Please provide your name, email address and phone number.
			</p>

			<form class="space-y-5" on:submit|preventDefault={handle_submit}>
				{#each form_fields as field}
					<div class="space-y-1 text-sm text-blue-300">
						<div class="flex items-center justify-between">
							<label for={field.id} class="block">{field.label}</label>
							{#if errors?.[field.id]}
								<span class="text-red text-xs font-medium"
									>This field is required</span
								>
							{/if}
						</div>
						<input
							type={field.type}
							placeholder={field.placeholder}
							id={field.id}
							name={field.id}
							class={`border rounded border-gray-50 w-full p-3  ${
								errors?.[field.id] ? 'outline-red' : ''
							}`}
							autocomplete="0"
							on:input={e =>
								e.currentTarget.value
									? (errors = { ...errors, [field.id]: false })
									: (errors = { ...errors, [field.id]: true })}
						/>
					</div>
				{/each}

				<ButtonGroup />
			</form>
		</div>
	</div>
</div>
