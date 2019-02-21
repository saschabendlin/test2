<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <v-flex
      md12
      lg12
    >
      <material-card
        class="card-tabs"
        color="blue">
        <v-flex
          slot="header"
        >
          <v-tabs
            v-model="tabs"
            color="transparent"
            slider-color="white"
          >
            <v-tab>
              KELULUSAN MANAGER 001
            </v-tab>
          </v-tabs>
        </v-flex>

        <v-tabs-items v-model="tabs">
          <v-tab-item
            v-for="n in 1"
            :key="n"
          >

            <template>
              <v-container fluid grid-list-md>
                <v-textarea
                  name="input-7-1"
                  box
                  label="KELULUSAN"
                  auto-grow
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
              </v-container>
            </template>

          </v-tab-item>
        </v-tabs-items>
      </material-card>
    </v-flex>

    <!-- MNAGER 002 -->

    <v-flex
      md12
      lg12
    >
      <material-card
        class="card-tabs"
        color="blue">
        <v-flex
          slot="header"
        >
          <v-tabs
            v-model="tabs"
            color="transparent"
            slider-color="white"
          >
            <v-tab>
              KELULUSAN MANAGER 002
            </v-tab>
          </v-tabs>
        </v-flex>

        <v-tabs-items v-model="tabs">
          <v-tab-item
            v-for="n in 1"
            :key="n"
          >

            <template>
              <v-container fluid grid-list-md>
                <v-textarea
                  name="input-7-1"
                  box
                  label="KELULUSAN"
                  auto-grow disabled
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
              </v-container>
            </template>

          </v-tab-item>
        </v-tabs-items>
      </material-card>
    </v-flex>

    <!--    MANAGER 3   -->

    <v-flex
      md12
      lg12
    >
      <material-card
        class="card-tabs"
        color="blue">
        <v-flex
          slot="header"
        >
          <v-tabs
            v-model="tabs"
            color="transparent"
            slider-color="white"
          >
            <v-tab>
              KELULUSAN MANAGER 003
            </v-tab>
          </v-tabs>
        </v-flex>

        <v-tabs-items v-model="tabs">
          <v-tab-item
            v-for="n in 1"
            :key="n"
          >

            <template>
              <v-container fluid grid-list-md>
                <v-textarea
                  name="input-7-1"
                  box
                  label="KELULUSAN"
                  auto-grow
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
              </v-container>
            </template>

          </v-tab-item>
        </v-tabs-items>
      </material-card>
    </v-flex>

    </v-layout>
  </v-container>
</template>