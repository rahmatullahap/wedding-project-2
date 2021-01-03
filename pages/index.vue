<template>
  <v-app dark style="overflow: hidden">
    <v-toolbar
      color="primary"
      prominent
      :src="header"
      extended
      extension-height="400"
    >
      <!-- <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer> -->
    </v-toolbar>

    <v-main style="padding-bottom: 60px">
      <v-container class="fill-height" style="padding-bottom: 60px">
        <div
          v-if="selection === 'invitation'"
          class="content"
          style="height: 95%; width: 100%"
        >
          <event></event>
        </div>
        <div
          v-if="selection === 'timeline'"
          class="content"
          style="height: 95%; width: 100%"
        >
          <timeline></timeline>
        </div>
        <div
          v-if="selection === 'message'"
          class="content"
          style="height: 95%; width: 100%"
        >
          <pray></pray>
        </div>
      </v-container>
    </v-main>
    <v-footer :absolute="true" :padless="true" style="position: fixed">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-bottom-navigation v-model="selection" color="primary">
          <v-btn value="timeline">
            <span>About Us</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn value="invitation">
            <span>Event</span>
            <v-icon>mdi-calendar-month</v-icon>
          </v-btn>

          <v-btn value="message">
            <span>Prays</span>
            <v-icon>mdi-message</v-icon>
          </v-btn>
        </v-bottom-navigation>
        <!-- <v-divider></v-divider> -->

        <!-- <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>HR</strong>
            </v-card-text> -->
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts" src="./index.ts"></script>
