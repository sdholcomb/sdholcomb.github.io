<template>
    <v-container>
      <v-row
        align="start"
      >
        <v-col v-for="card in cards">
          <v-card
            v-bind="props"
            border="md"
            color="#212121"
          >
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
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LearnView',
  components: {},
  data: () => ({
    cards: [
      {
        title: 'Database Notes',
        subtitle: 'Basic tool for checking keycodes',
        route: '/raw/learn/database1.html'
      },
      {
        title: 'Operations Research',
        subtitle: 'Simplex Algorithm, Hessian & Principal Minors, Golden Section Search',
        route: '/raw/learn/operations1.html'
      },
      {
        title: 'R Problems',
        subtitle: 'Using R language to solve various problems',
        route:'/raw/learn/operations2.html'
      },
      {
        title: 'Stats Formulas',
        subtitle: 'Formulas for statistics',
        route: '/raw/learn/stats_formulas.html'
      },
      {
        title: 'Hypothesis Testing',
        subtitle: 'Review on statistics hypothesis testing',
        route: '/raw/learn/stats.html'
      }
    ],
  })
});
</script>

<style scoped>
</style>
