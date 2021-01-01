<template>
  <v-container>
    <v-card :disabled="loading">
      <v-data-table
        :footer-props="{
          'items-per-page-all-text': 'Semua',
          itemsPerPageText: 'Item per halaman',
          'show-current-page': true,
          'show-first-last-page': true
        }"
        :headers="headers"
        :items="instances"
        item-key="id"
        class="elevation-1"
        no-data-text="Data kosong"
      >
        <template v-slot:[`item.no`]="{ item }">
          {{ instances.map((p) => p.id).indexOf(item.id) + 1 }}
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-btn
            :disabled="item.done"
            icon
            small
            @click.stop="addAttendance(item.id)"
          >
            <v-icon small>mdi-account-plus</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <add-attendance
      :dialog="addDialog"
      :instances="selectedInstance"
      @close="close"
    ></add-attendance>
  </v-container>
</template>

<script lang="ts" src="./index.ts"></script>
