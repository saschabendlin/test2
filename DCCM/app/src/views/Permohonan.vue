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
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Kombinasi Komponen</span>
              <v-tab class="mr-3">

              </v-tab>
              <v-tab class="mr-3">

              </v-tab>
              <v-tab>

              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(14)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + APLIKASI
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + APLIKASI + CICS + RACF
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + APLIKASI
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(3)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + DB2
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(4)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + DB2 + CICS + RACF
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(5)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + ORACLE
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(6)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + RANGKAIAN
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(7)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    PERALIHAN  ( KELUAR MASUK PERALATANN )
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(8)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    ALIRAN NORMAL ( LAIN-LAIN )
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(9)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    ICSC + ORACLE + SQL
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(10)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    SQL
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

                <v-list-tile @click="complete(11)">
                  <v-list-tile-action>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in 1"
                        :key="n"
                        :label="` `"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                  </v-list-tile-action>
                  <v-list-tile-title>
                    HOST + DB2 + SQL
                  </v-list-tile-title>

                </v-list-tile>
                <v-divider/>

              </v-list>
            </v-tab-item>
          </v-tabs-items>

        </material-card>
      </v-flex>

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

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(12)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Aplikasi
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Pangkalan Data
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    &nbsp;&nbsp;&nbsp;DB2
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    &nbsp;&nbsp;&nbsp;ORACLE
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(3)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    &nbsp;&nbsp;&nbsp;MSSQL
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(4)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    PERKSEKITARAN
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(5)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    PERKAKASAN
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(6)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    RANGKAIAN
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(7)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    SISTEM
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(8)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    PERALIHAN
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(13)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    CICS
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(10)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="blue"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    RACF
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>

              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <v-flex
        md4
        lg12
      >
        <v-btn color="blue" dark class="mb-12">Hantar</v-btn>
      </v-flex>

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
                PELAN PELAKSANAAN PERTUKARAN
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <template>
                <v-form v-model="valid">
                  <v-container>
                    <v-layout>

                      <v-flex
                        xs12
                        md12
                      >

                        Jenis Kerja

                        <v-radio-group v-model="ex5" column>
                          <v-radio label="Keperluan Baru" value="radio-1" ></v-radio>
                          <v-radio label="Perubahan" value="radio-2"></v-radio>
                          <v-radio label="Pengubahsuaian" value="radio-3"></v-radio>
                        </v-radio-group>

                      </divider>
                      </divider>

                        <v-flex
                          xs12
                          md8
                        >

                          <v-text-field
                            v-model="namaProduk"
                            :rules="namaProduk"
                            label="Nama Produk"

                          ></v-text-field>

                        </v-flex>
                      </divider>
                      </divider>

                        <v-flex
                          xs12
                          md12
                        >
                          KERJA PENGUBAHSUAIAN

                          <template>
                            <v-container fluid grid-list-md>
                              <v-textarea
                                name="input-7-1"
                                box
                                label="KERJA PENGUBAHSUAIAN"
                                auto-grow
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                              ></v-textarea>
                            </v-container>
                          </template>

                          SEBAB PENGUBAHSUAIAN

                          <template>
                            <v-container fluid grid-list-md>
                              <v-textarea
                                name="input-7-1"
                                box
                                label="SEBAB PENGUBAHSUAIAN"
                                auto-grow
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                              ></v-textarea>
                            </v-container>
                          </template>

                          SUMBER / PERLATAN TERLIBAT

                          <template>
                            <v-container fluid grid-list-md>
                              <v-textarea
                                name="input-7-1"
                                box
                                label="SUMBER / PERLATAN TERLIBAT"
                                auto-grow
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                              ></v-textarea>
                            </v-container>
                          </template>

                          TARIKH

                          <template>
                            <v-layout row wrap>
                              <v-spacer></v-spacer>
                              <v-flex xs12 sm6 md4>
                                <v-dialog
                                  ref="dialog"
                                  v-model="modal"
                                  :return-value.sync="date"
                                  persistent
                                  lazy
                                  full-width
                                  width="290px"
                                >
                                  <v-text-field
                                    slot="activator"
                                    v-model="date"
                                    label="Tarikh Mula"
                                    prepend-icon=""
                                    readonly
                                  ></v-text-field>
                                  <v-date-picker v-model="date" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                  </v-date-picker>
                                </v-dialog>
                              </v-flex>
                              <v-spacer></v-spacer>
                              <v-flex xs12 sm6 md4>
                                <v-dialog
                                  ref="dialog"
                                  v-model="modal"
                                  :return-value.sync="date"
                                  persistent
                                  lazy
                                  full-width
                                  width="290px"
                                >
                                  <v-text-field
                                    slot="activator"
                                    v-model="date"
                                    label="Tarikh Tamat"
                                    prepend-icon=""
                                    readonly
                                  ></v-text-field>
                                  <v-date-picker v-model="date" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                  </v-date-picker>
                                </v-dialog>
                              </v-flex>
                            </v-layout>
                          </template>

                        </v-flex>

                        <br/>

                        SETELAH PENGUBAHSUAIAN DILAKSANAKAN,
                        KEPERLUAN LAIN SEKIRANYA ADA

                        <template>
                          <v-container fluid grid-list-md>
                            <v-textarea
                              name="input-7-1"
                              box
                              label="KEPERLUAN LAIN"
                              auto-grow
                              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                          </v-container>
                        </template>

                        <br/>

                        ANALISA KESAN + RISIKO

                        <template>
                          <v-container fluid grid-list-md>
                            <v-textarea
                              name="input-7-1"
                              box
                              label=" ANALISA KESAN + RISIKO"
                              auto-grow
                              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                          </v-container>
                        </template>

                        <br/>

                        PROSES PEMULIHAN SEKIRANYA AKTIVITI GAGAL

                        <template>
                          <v-container fluid grid-list-md>
                            <v-textarea
                              name="input-7-1"
                              box
                              label="PROSES PEMULIHAN SEKIRANYA AKTIVITI GAGAL"
                              auto-grow
                              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                          </v-container>
                        </template>

                        <br/>

                        PROSEDUR PENGUJIAN

                        <template>
                          <v-container fluid grid-list-md>
                            <v-textarea
                              name="input-7-1"
                              box
                              label="PROSEDUR PENGUJIAN"
                              auto-grow
                              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                          </v-container>
                        </template>

                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </template>

            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   pasukan  -->

      <v-flex
        md12
        lg6
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
                PASUKAN PELAKSANA
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   pelan projek  -->

      <v-flex
        md12
        lg6
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
                PELAN PROJEK
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   APLIKASI  -->

      <v-flex
        md12
        lg6
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
                PENUKARAN APLIKASI
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   PANGKALAN DATA DB2  -->

      <v-flex
        md12
        lg6
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
                PANGKALAN DATA DB2
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   CICS  -->

      <v-flex
        md12
        lg6
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
                CICS / RACF
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   pasukan  -->

      <v-flex
        md12
        lg6
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
                PASUKAN PELAKSANA
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   ORACLE / MYSQL  -->

      <v-flex
        md12
        lg6
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
                ORACLE / MYSQL
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   RANGKAIAN  -->

      <v-flex
        md12
        lg6
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
                RANGKAIAN
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   PERALIHAN  -->

      <v-flex
        md6
        lg6
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
                PASUKAN PELAKSANA
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              vdfdfd
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

      <!--   LAMPIRAN  -->

      <v-flex
        md12
        lg6
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
                LAMPIRAN
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <div >
                <v-btn color="blue-grey" class="black--text" @click.native="openFileDialog">
                  Upload
                  <v-icon right large color="teal darken-2"></v-icon>
                </v-btn>
                <input id="file-upload" type="file" style="display:none" @change="onFileChange">
              </div>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      formData: new FormData(),
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    openFileDialog () {
      document.getElementById('file-upload').click();
    },
    onFileChange (e) {
      var self = this;
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          self.formData.append("file", files[i], files[i].name);
        }
      }
    },
    uploadFile () {
      var self = this;
      axios.post('URL', self.formData).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
    complete (index) {
              this.list[index] = !this.list[index]
      // vv      alert( index  )
    }
  }
}
</script>