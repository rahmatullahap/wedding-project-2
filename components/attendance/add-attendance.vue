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
        <v-form ref="form" v-model="valid">
          <v-card-text>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model="selectedGuest"
                  :items="guests"
                  :search-input.sync="searchGuest"
                  :loading="isGuestLoading"
                  clearable
                  hide-no-data
                  hide-selected
                  item-text="name"
                  item-value="id"
                  label="Cari"
                  placeholder="Ketik nama, alamat"
                  prepend-inner-icon="mdi-magnify"
                  return-object
                  @change="onGuestChange"
                >
                  <template v-slot:item="data">
                    <v-list-item-content>
                      <v-list-item-title>{{
                        _.get(data, 'item.name', '-')
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        >Alamat:
                        {{
                          _.get(data, 'item.detail', '-')
                        }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle
                        >Sesi:
                        {{
                          _.get(data, 'item.session', '-')
                        }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
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
                <v-textarea
                  v-model="attendanceData.detail"
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
            <v-row>
              <v-col>
                <v-text-field
                  v-model="attendanceData.souvenirNo"
                  label="No Souvenir"
                  filled
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click.stop="closeDialog()">Batal</v-btn>
            <v-btn :disabled="!valid" color="primary" @click.stop="save()">
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
