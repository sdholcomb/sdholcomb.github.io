<template>
  <v-timeline>
    <v-timeline-item
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
      :dot-color="card.color"
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
      
      <v-card v-bind="props" border="md" color="#212121">
        <v-img
          :src="card.src"
          :aspect-ratio="16/9"
          height="200px"
          cover
        ></v-img>

        <v-card-title>
          {{ card.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.subtitle }}
        </v-card-subtitle>

        <v-card-actions v-if="card.route">
          <v-btn variant="tonal" :href="card.route">Visit</v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import waveslabImg from '@/assets/images/waveslab.png'
import midpointImg from '@/assets/images/midpoint.png'
import keycodeImg from '@/assets/images/keycode.png'
import bresenhamImg from '@/assets/images/bresenham.png'
import hoppyImg from '@/assets/images/hoppy_hunting.png'
import matrixFlightImg from '@/assets/images/matrixflight.png'
import loadersImg from '@/assets/images/loaders.png'

import ngImg from '@/assets/images/ng-logo.svg'
import hiiImg from '@/assets/images/hii-logo.png'

export default {
  name: 'ProjectsComponent',
  data: () => ({
    cards: [
      {
        title: 'Keycode',
        subtitle: 'Basic tool for checking keycodes',
        src: keycodeImg,
        year: 2018,
        route: '/raw/projects/keycode.html',
        color: "green-lighten-1"
      },
      {
        title: 'CSS Loaders',
        subtitle: 'Loading animations in pure CSS',
        src: loadersImg,
        year: 2018,
        route: '/raw/projects/loaders.html',
        color: "green-lighten-1"
      },
      {
        title: 'Bresenham',
        subtitle: 'Visualization of bresenham line drawing algorithm',
        src: bresenhamImg,
        year: 2018,
        route: '/raw/projects/bresenham.html',
        color: "green-lighten-1"
      },
      {
        title: 'Hoppy Hunting',
        subtitle: 'Creating a 2.5D game using just an HTML canvas',
        src: hoppyImg,
        year: 2018,
        route: '/raw/projects/hoppyhunting/index.html',
        color: "green-lighten-1"
      },
      {
        title: 'Matrix Flight',
        subtitle: 'Flight performing matrices operations',
        src: matrixFlightImg,
        year: 2018,
        route: '/raw/projects/greengatsby/index.html',
        color: "green-lighten-1"
      },
      {
        title: 'Midpoint Displacement',
        subtitle: 'Visualization of the midpoint displacement algorithm',
        src: midpointImg,
        year: 2018,
        route: '/raw/projects/midpoint_displacement/index.html',
        color: "green-lighten-1"
      },
      {
        title: 'Waveslab',
        subtitle: 'Audio visualization tool',
        src: waveslabImg,
        year: 2018,
        route: 'https://sdholcomb.github.io/WaveSlab/examples/example_override_style.html',
        color: "green-lighten-1"
      },
      {
        title: 'Northrop Grumman',
        subtitle: 'Employed at Northrop Grumman working on mission software, simulations, wargaming',
        src: ngImg,
        year: 2018,
        route: null,
        color: "blue"
      },
      {
        title: 'HII',
        subtitle: 'Employed at Huntington Ingalls working on embedded systems',
        src: hiiImg,
        year: 2024,
        route: null,
        color: "blue"
      }
    ],
  })
}
</script>

<style scoped>
</style>
