<template>
  <v-app>
    <v-navigation-drawer
      expand-on-hover
      rail
    >
      <v-list>
        <v-list-item
          :prepend-avatar="logo"
          title="Halite"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
          class="nav-drawer-item"
          @click="routeHome"
        />
        <v-list-item
          prepend-icon="mdi-flask-empty-outline"
          title="Projects"
          value="projects"
          class="nav-drawer-item"
          @click="routeProjects"
        />
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="About me"
          value="aboutme"
          class="nav-drawer-item"
        />
        <v-list-item
          prepend-icon="mdi-book-open"
          title="Learn"
          value="learn"
          class="nav-drawer-item"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import logo from '@/assets/icon.svg'

export default {
  name: 'App',
  data: () => ({
    logo
  }),
  methods: {
    routeHome: function () {
      this.$router.push('/')
    },
    routeProjects: function () {
      this.$router.push('/projects')
    }
  }
}
</script>

<style scoped>
  .nav-drawer-item:hover {
    color: #239c62;
  }
</style>
