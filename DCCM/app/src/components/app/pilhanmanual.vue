<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >

      <v-flex
        md12
        lg6
      >
        <material-card
          class="card-tabs"
          color="green">
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <v-tab>
                Pilihan Manual
              </v-tab>
            </v-tabs>
          </v-flex>

        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>