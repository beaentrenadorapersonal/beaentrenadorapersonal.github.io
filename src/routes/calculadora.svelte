<script lang="ts">
	let services = [
		{ id: 1, text: `Entrenamiento Personal` },
		{ id: 2, text: `Mommy and Wellness` },
		{ id: 3, text: `Plan a tu Medida` },
		{ id: 4, text: `Servicio de Asesoramiento` }
	];

	let locations = [
		{ id: 1, text: `Instalaciones Pau Gasol` },
		{ id: 2, text: `Domicilio Particular` },
		{ id: 3, text: `Online` }
	];

	let selected = services[0];
	let location = locations[0];

	let sessions = 1;
	let group = false;

	let total = 80;

	function calculatePersonalTraining() {
		if (location.id === 1 || location.id === 3) {
			if (group) {
				total = sessions * 25;
			} else {
				if (sessions < 5) {
					total = sessions * 80;
				} else if (sessions < 10) {
					total = sessions * 70;
				} else if (sessions < 20) {
					total = sessions * 60;
				} else {
					total = sessions * 45;
				}
			}
		} else if (location.id === 2) {
			if (group) {
				total = sessions * 40;
			} else {
				if (sessions < 5) {
					total = sessions * 100;
				} else if (sessions < 10) {
					total = sessions * 80;
				} else if (sessions < 20) {
					total = sessions * 70;
				} else {
					total = sessions * 60;
				}
			}
		} else {
			total = 666;
		}
	}

	function calculateCounseling() {
		total = sessions * 80;
	}

	function resetTotal() {
		if (selected.id === 1) {
			total = sessions * 80;
		} else {
			total = sessions * 100;
		}
	}
</script>

<div class="calculator">
	<h2>Calculadora</h2>

	<select bind:value={selected} on:change={resetTotal}>
		{#each services as s}
			<option value={s}>
				{s.text}
			</option>
		{/each}
	</select>
	{#if selected.id === 1}
		<br />
		<form on:change={calculatePersonalTraining}>
			<label>
				<input type="checkbox" id="group" bind:checked={group} />
				En grupo
			</label>
			<br />
			<select bind:value={location} on:change={(e) => console.log(e)}>
				{#each locations as l}
					<option value={l}>
						{l.text}
					</option>
				{/each}
			</select>
			<br />
			<label>
				Sesiones: <input type="number" bind:value={sessions} min="1" />
			</label>
		</form>

		<div class="total">
			Total: {total} €
		</div>
	{:else if selected.id === 2}
		<div class="total">Total: 260 €</div>
	{:else if selected.id === 3}
		<div class="total">Total: 100 €</div>
	{:else if selected.id === 4}
		<form on:change={calculateCounseling}>
			<label>
				Sesiones: <input type="number" bind:value={sessions} min="1" />
			</label>
		</form>
		<div class="total">
			Total: {total} €
		</div>
	{/if}
</div>

<style>
	.calculator {
		padding: 1em;
	}

	form {
		margin: 1em;
	}

	.total {
		padding: 1em;
		background-color: red;
		font-weight: 500;
		border-radius: 10px;
	}
</style>
