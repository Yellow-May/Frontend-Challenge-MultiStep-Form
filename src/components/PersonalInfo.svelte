<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	import { form_fields, get_form_data, save_form_data } from '../helpers';

	let title = 'Personal Info';
	let desc = 'Please provide your name, email address and phone number.';
	let data = {} as any;
	$: errors = {} as any;

	const curr_form_data = get_form_data();
	form_fields.forEach(e => {
		data = { ...data, [e.id]: curr_form_data?.[e.id] ?? '' };
		errors = { ...errors, [e.id]: false };
	});

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_input = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		const { id, value } = e.currentTarget;
		if (e.currentTarget.value) errors = { ...errors, [id]: false };
		else errors = { ...errors, [id]: true };

		data = { ...data, [id]: value };
		save_form_data(data);
	};
	const handle_submit = () => {
		form_fields.forEach(e => {
			errors = { ...errors, [e.id]: !data?.[e.id] };
		});
		if (
			!Object.keys(errors).reduce(
				(a, b) => (errors?.[b] === true ? true : a),
				false
			)
		) {
			save_form_data(data);
			next();
		}
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit}>
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
					value={data?.[field.id] ?? ''}
					on:input={handle_input}
					class={`border rounded border-gray-50 w-full p-3  ${
						errors?.[field.id] ? 'outline-red' : ''
					}`}
					autocomplete="0"
				/>
			</div>
		{/each}
	</div>
</Wrapper>
