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
        :loading="loading"
        :options.sync="options"
        :server-items-length="totalItems"
        item-key="id"
        class="elevation-1"
        no-data-text="Data kosong"
        @pagination="pagination"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-btn small color="primary" class="mr-2" @click="returnAttendance">
              <span>Tukar Souvenir</span>
            </v-btn>
            <v-btn small color="primary" @click="addAttendance">
              <span>Tambah tamu baru</span>
              <v-icon small class="ml-2">mdi-account-plus</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="keywords"
              class="mt-0 pt-0"
              append-icon="mdi-magnify"
              label="Ketik nama tamu..."
              single-line
              hide-details
            />
          </v-toolbar>
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip
            v-if="!_.get(item, 'returnedAt', false)"
            color="success"
            small
          >
            {{ _.get(item, 'createdAt', '-') | date('dd/MM/yyyy HH:mm') }}
          </v-chip>
          <span v-else>
            {{ _.get(item, 'createdAt', '-') | date('dd/MM/yyyy HH:mm') }}
          </span>
        </template>
        <template v-slot:[`item.returnedAt`]="{ item }">
          <v-chip v-if="_.get(item, 'returnedAt', false)" color="error" small>
            {{ _.get(item, 'returnedAt', '-') | date('dd/MM/yyyy HH:mm') }}
          </v-chip>
          <span v-else>
            {{ _.get(item, 'returnedAt', '-') | date('dd/MM/yyyy HH:mm') }}
          </span>
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-btn
            :disabled="item.done"
            icon
            small
            @click.stop="editGuest(item.id)"
          >
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-row class="pt-5">
      <v-col
        ><v-card>
          <v-card-title
            >Jumlah yang di dalam ruangan {{ inRoomCount }}</v-card-title
          ></v-card
        ></v-col
      >
      <v-col>
        <v-card>
          <v-card-title
            >Jumlah yang hadir {{ attendanceCount }}</v-card-title
          ></v-card
        >
      </v-col>
    </v-row>
    <add-attendance
      :dialog="addDialog"
      @close="close"
      @error="error"
    ></add-attendance>
    <return-attendance
      :dialog="returnDialog"
      @close="close"
      @error="error"
    ></return-attendance>
    <!-- error & success message -->
    <v-snackbar v-model="errorToast" :timeout="5000" color="error">
      {{ errorMessage }}
      <v-btn text icon @click="errorToast = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="successToast" :timeout="5000">
      {{ successMessage }}
      <v-btn text icon @click="successToast = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" src="./index.ts"></script>
