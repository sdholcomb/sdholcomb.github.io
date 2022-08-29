<template>
  <v-timeline>
    <v-timeline-item
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
      dot-color="green-lighten-1"
      fill-dot
      size="x-small"
      width="75%"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-green`"
          v-text="card.year"
        ></div>
      </template>
      
      <v-hover v-slot="{ isHovering , props }">
      <v-card v-bind="props">
        <v-img
          :src="card.src"
          :aspect-ratio="16 / 9"
          height="200px"
          class="project-img"
          cover
        ></v-img>

        <v-card-title>
          {{ card.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.subtitle }}
        </v-card-subtitle>

        <v-overlay
          :model-value="isHovering"
          v-if="card.route"
          contained
          scrim="#036358"
          class="align-center justify-center"
        >
          <v-btn flat :href="card.route">View</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import img1 from '@/assets/images/img1.png'
import waveslabImg from '@/assets/images/waveslab.png'

export default {
  name: 'ProjectsComponent',
  data: () => ({
    cards: [
      {
        title: 'Keycode',
        subtitle: 'Simple tool to acquire keycodes',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Snake',
        subtitle: 'A game of snake',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Bresenham',
        subtitle: 'Bresenham algorithm visualized',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Hoppy Hunting',
        subtitle: 'A 2.5D game made in canvas',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Matrix Flight',
        subtitle: 'Flight with matrix math',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Midpoint Displacement',
        subtitle: 'Midpoint displacement visualized',
        src: img1,
        year: 2018,
        route: null,
      },
      {
        title: 'Waveslab',
        subtitle: 'Audio visualization tool',
        src: waveslabImg,
        year: 2018,
        route: 'https://sdholcomb.github.io/WaveSlab/examples/example_override_style.html',
      },
    ],
  })
}
</script>

<style scoped>
</style>
