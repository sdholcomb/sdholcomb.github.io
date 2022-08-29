<template>
  <ProjectsComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectsComponent from '../components/ProjectsComponent.vue';

export default defineComponent({
  name: 'ProjectsView',

  components: {
    ProjectsComponent,
  },
});
</script>
