<script lang="ts">
	import FormWrapper from './layouts/FormWrapper.svelte';
	import { form_fields } from '../helpers';

	export let back: any;
	export let next: any;

	$: errors = {};
	form_fields.forEach(e => (errors = { ...errors, [e.id]: false }));

	const handle_submit = (
		e: Event & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		const form_data = new FormData(e.target as HTMLFormElement);
		form_fields.forEach(
			e =>
				(errors = {
					...errors,
					[e.id]: !form_data.get(e.id),
				})
		);
		if (
			!Object.keys(errors).reduce(
				(a, b) => (errors?.[b] === true ? true : a),
				false
			)
		) {
			next();
		}
	};

	export let stage: string;
</script>

<div>
	<h1 class="font-bold text-2xl text-blue-300 mb-2">Personal Info</h1>
	<p class="text-gray-100 tracking-wide mb-7">
		Please provide your name, email address and phone number.
	</p>

	<FormWrapper {stage} {handle_submit} {back}>
		<div class="space-y-5">
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
		</div>
	</FormWrapper>
</div>
