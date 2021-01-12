<template>
  <div class="pa-2">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title"> {{ item.title }} </v-card-title>
          <v-card-text class="white text--primary pt-2">
            <p>{{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <!-- <v-row class="pa-2">
      <v-col v-for="(gal, j) of gallery" :key="j" cols="4">
        <v-img
          :src="getSrc(gal)"
          :lazy-src="getSrc(gal)"
          aspect-ratio="1"
          max-height="250"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row> -->
  </div>
</template>

<script lang="ts" src="./timeline.ts"></script>
