<template>
  <div>
    <v-card class="content-card" flat tile :outlined="false">
      <v-card-title class="justify-center">Counter to the event</v-card-title>
      <v-card-text class="justify-center text-center">
        <h2 v-if="duration > 0">{{ countdown }}</h2>
        <h2 v-if="duration <= 0">DONE !</h2>
      </v-card-text>
    </v-card>
    <v-card
      :loading="loading"
      class="content-card my-12"
      flat
      tile
      :outlined="false"
    >
      <template slot="progress">
        <v-progress-linear
          color="primary"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img style="opacity: 0.5" height="250" :src="header"></v-img>

      <v-card-title class="justify-center">Ahad, 17 Januari 2021</v-card-title>

      <div v-if="selection === 1" class="subtitle-1 text-center">
        09.30-11.00
      </div>
      <div v-if="selection === 2" class="subtitle-1 text-center">
        11.00-12.30
      </div>
      <div v-if="selection === 3" class="subtitle-1 text-center">
        12.30-14.00
      </div>
      <v-card-text class="justify-center text-center">
        <div>Kologdam Grand Ballroom Jl. Aceh No. 50 Merdeka, Bandung</div>
      </v-card-text>

      <div class="text-center justify-center">
        <v-btn color="secondary" class="ma-2 white--text" @click="openMap">
          <v-icon left dark> mdi-map-marker </v-icon>
          Map
        </v-btn>
      </div>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-title>Tonight's availability</v-card-title> -->

      <v-card-text>
        <v-chip-group
          v-model="selection"
          class="session-chip"
          active-class="primary white--text"
          column
          @change="onSessionChange()"
        >
          <v-chip :value="1">Sesi 1</v-chip>
          <v-chip :value="2">Sesi 2</v-chip>
          <v-chip :value="3">Sesi 3</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-img :src="protocol"></v-img>

      <!-- <v-card-actions>
      <v-btn color="primary lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions> -->
    </v-card>
  </div>
</template>

<script lang="ts" src="./event.ts"></script>
