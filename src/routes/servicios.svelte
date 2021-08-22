<script lang="ts">
	import Brief from './_brief.svelte';

	import { title } from '../stores';

	title.set('Servicios');
</script>

<Brief
	title="Entrenamientos individuales"
	description="Este entrenamiento se adapta 100% a las necesidades y objetivo del cliente/a atendiendo a sus particularidades en todo momento, y respetando su ritmo de trabajo así como su disponibilidad. En la primera toma de contacto, donde se expone el caso del cliente, se toman medidas anatómicas, pesos y porcentajes y se hace un estudio de su composición corporal. Este estudio más las particularidades, forma física y objetivo del cliente/a será determinante para trazar la planificación que se va a llevar a cabo durante el entrenamiento."
	imgSrc="/individual.jpg"
	imgAlt="entrenamientos individuales"
	position="left"
/>
<Brief
	title="Entrenamientos en grupos"
	description="En los entrenamientos en grupo reducido (de 2 a 4 personas) se trabaja de forma general el objetivo de tod@s los participantes atendiendo a las particularidades de cada un@ de ell@s. Són entrenamientos dinámicos donde se adaptan pesos y ejercicios a cada caso, buscando la afinidad entre las participantes de edades y/o perfiles similares."
	imgSrc="/grupos.jpg"
	imgAlt="entrenamientos en grupo"
	position="right"
/>
<Brief
	title="Mommy & Welness"
	description="Este servicio combinado de asesoría en la lactancia y ejercicios de recuperación post parto busca el bienestar conjunto para el bebé y la mamá también enfocada como mujer.
Un trabajo conjunto con una asesora de lactancia y enfermera materno-infantil que puede llevarse a cabo a partir del día del nacimiento de bebé.  Una vez finalizada la cuarentena buscaremos el espacio para la mujer con unas sesiones de 30’ donde se activará la musculatura de las zonas que se han visto afectadas por el embarazo, el parto y el post-parto (ejercicios para la recuperación del suelo pélvico, mejorar el tono muscular de la espalda y combatir las molestias típicas del embarazo, relajar y liberar la mente del día a día). Puedes disponer de ambos servicios tanto combinados como por separado y disfrutar tu parte de wellness tanto individual como en grupo reducido (de 2 a 4 personas)."
	imgSrc="/mamas.jpg"
	imgAlt="para mamás"
	position="left"
/>
