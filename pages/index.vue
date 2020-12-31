<template>
  <!-- <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <h1>Memuat...</h1>
      </v-flex>
    </v-layout>
  </v-container> -->
  <v-app dark>
    <v-main>
      <v-container class="fill-height" fluid>
        <!-- <v-card height="400px"> </v-card> -->
        <v-footer :absolute="true" :padless="true">
          <v-card flat tile width="100%" class="red lighten-1 text-center">
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./index.ts"></script>
