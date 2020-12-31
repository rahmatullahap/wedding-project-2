<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card :loading="loading" :disabled="loading">
        <v-card-title>
          <v-spacer class="headline">Tambah Tamu yang Hadir</v-spacer>
          <v-btn text icon @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-form ref="form" v-model="valid" @submit.prevent="save()">
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="attendanceData.name"
                  label="Nama"
                  filled
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model="attendanceData.instance"
                  :items="instances"
                  filled
                  label="Instansi"
                  height="50"
                  item-text="name"
                  item-value="id"
                  placeholder="Pilih instansi"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="attendanceData.address"
                  label="Alamat"
                  filled
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="attendanceData.count"
                  label="Jumlah hadir"
                  filled
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click.stop="closeDialog()">Batal</v-btn>
            <v-btn type="submit" :disabled="!valid" color="primary">
              <v-icon class="mr-2">mdi-content-save-outline</v-icon>
              Tambahkan
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./add-attendance.ts"></script>
