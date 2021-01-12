<template>
  <div class="pa-2">
    <v-row dense>
      <v-col lg="6" md="6" sm="12" cols="12">
        <v-card class="content-card" flat tile :outlined="false">
          <v-card-title class="justify-center text-center"
            ><h3 style="font-size: 1rem">Hasna Karimah, S.Kom</h3></v-card-title
          >
          <v-card-text
            class="justify-center text-center"
            style="font-size: 0.8rem"
          >
            <div>
              Putri Bungsu dari Bapak Dr. Ir. H, Yusuf Afandi, M.T dan Ibu Dra.
              Hj. Nurhasanah Dewi. Lahir di Tangerang, 15 September 1998.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12"
        ><v-card class="content-card" flat tile :outlined="false">
          <v-card-title class="justify-center text-center"
            ><h3 style="font-size: 1rem">
              Rahmatullah Arrizal Pranatadesta, S.Kom, M.T
            </h3></v-card-title
          >
          <v-card-text
            class="justify-center text-center"
            style="font-size: 0.8rem"
          >
            <div>
              Putra Sulung dari Bapak Prof. Dr. H. Engkus Kuswarno, M.S dan Hj.
              Mia Rachmiati, A.Md. Lahir di Bandung, 4 April 1996.
            </div>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
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
