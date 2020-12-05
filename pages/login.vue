<template>
  <v-app dark>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-form ref="form" @submit.prevent="login()">
              <v-card class="elevation-12">
                <v-toolbar dark flat>
                  <v-toolbar-title>Masuk Aplikasi</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Email"
                      type="text"
                      name="email"
                      placeholder="misal budi@email.id"
                      append-icon="mdi-account"
                      filled
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      type="password"
                      label="Password"
                      name="password"
                      append-icon="mdi-lock"
                      filled
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">
                    Login
                    <v-icon class="ml-2"> mdi-login-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./login.ts"></script>
