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
        <v-list-item prepend-icon="mdi-flask-empty-outline" title="Projects" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="About me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open" title="Learn" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import logo from './assets/icon.svg'

export default {
  name: 'App',

  data: () => ({
    logo
  }),
}
</script>
