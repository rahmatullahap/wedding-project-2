<template>
  <div class="pa-2">
    <!-- <v-card
      :loading="loading"
      :disabled="loading"
      class="content-card"
      flat
      tile
      :outlined="false"
    >
      <v-card-title>
        <v-spacer class="headline">Kirim Doa</v-spacer>
      </v-card-title>
      <v-form ref="form" v-model="valid" @submit.prevent="save()">
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field v-model="email" label="Email" filled required />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="name"
                label="Nama"
                filled
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="message"
                label="Pesan"
                filled
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="instagram"
                label="Instagram"
                filled
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn type="submit" :disabled="!valid" color="primary">
            <v-icon class="mr-2">mdi-content-save-outline</v-icon>
            Kirim
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <div class="message-wrapper pt-5">
      <v-progress-circular
        v-if="loading"
        :size="100"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <v-row v-if="!loading" dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <v-card
            :color="item.color"
            dark
            style="height: 200px"
            elevation="0"
            outlined="false"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.name"
                ></v-card-title>

                <v-card-subtitle>{{ item.message | summary }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded small>
                    Show More
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div> -->
    <v-row class="pa-2">
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
    </v-row>
  </div>
</template>

<script lang="ts" src="./pray.ts"></script>
