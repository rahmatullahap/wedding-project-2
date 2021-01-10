<template>
  <v-app dark style="overflow: hidden">
    <v-banner single-line sticky> #RahmatUntukHasna </v-banner>
    <v-carousel hide-delimiters :show-arrows="false" height="250">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        active-class="header-carousel"
      >
        <v-sheet color="transparent" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="header-title">Hasna & Rahmat</div>
          </v-row>
        </v-sheet></v-carousel-item
      >
    </v-carousel>

    <v-main style="padding-bottom: 60px">
      <v-container class="pa-0" style="padding-bottom: 60px">
        <div
          v-if="selection === 0"
          class="content"
          style="height: 95%; width: 100%"
        >
          <event></event>
        </div>
        <div
          v-if="selection === 1"
          class="content"
          style="height: 95%; width: 100%"
        >
          <timeline></timeline>
        </div>
        <div
          v-if="selection === 2"
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
