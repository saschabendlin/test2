<template>
  <v-container
    fill-height
    fluid >
    <v-layout justify-center>
      <v-flex
        md8
        xs12
        wrap>
        <material-card
          color="green"
          title="Login"
          text="Enter your details">
                <v-flex
                  xs12
                  md6>
                  <v-text-field
                    class="purple-input"
                    label="User Name"/>
                </v-flex>
                <v-flex
                  xs12
                  md6>
                  <v-text-field
                    label="Pssword"
                    class="purple-input"/>
                </v-flex>

                <v-flex
                  xs12
                  text-xs-right>
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success">Login</v-btn>
                </v-flex>
           </material-card>
           </v-flex>
    </v-layout>
  </v-container>
</template>
