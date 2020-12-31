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
        :items="attendances"
        item-key="id"
        class="elevation-1"
        no-data-text="Data kosong"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn small color="primary" @click="addAttendance">
              <span>Tambah tamu baru</span>
              <v-icon small class="ml-2">mdi-account-plus</v-icon>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ _.get(item, 'createdAt', '-') | date('dd/MM/yyyy HH:mm') }}
        </template>
        <template v-slot:[`item.returnedAt`]="{ item }">
          {{ _.get(item, 'returnedAt', '-') | date('dd/MM/yyyy HH:mm') }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip v-if="_.get(item, 'vip', false)" color="primary" small>
            VIP
          </v-chip>
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-btn
            :disabled="item.done"
            icon
            small
            @click.stop="returnGuest(item.id)"
          >
            <v-icon small>mdi-keyboard-return</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <add-attendance :dialog="addDialog" @close="close"></add-attendance>
  </v-container>
</template>

<script lang="ts" src="./index.ts"></script>
