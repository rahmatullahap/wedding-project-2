<template>
  <v-app dark style="overflow: hidden">
    <v-toolbar dark prominent src="https://picsum.photos/1920/1080?random">
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-main style="padding-bottom: 60px">
      <v-container class="fill-height" style="padding-bottom: 60px">
        <div class="content" style="height: 95%">
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card :color="item.color" dark>
                <v-card-title class="title"> Lorem Ipsum Dolor </v-card-title>
                <v-card-text class="white text--primary">
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                  <v-btn :color="item.color" class="mx-0" outlined>
                    Button
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-container>
    </v-main>
    <v-footer :absolute="true" :padless="true" style="position: fixed">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-bottom-navigation v-model="selection" color="primary" shift>
          <v-btn value="invitation">
            <span>Invitation</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn value="timeline">
            <span>Timeline</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn value="message">
            <span>Message</span>
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
