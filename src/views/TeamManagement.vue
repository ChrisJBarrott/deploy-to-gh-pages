<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <app-card class="mt-4 text-center">
          <v-img
            class="rounded-circle elevation-6 mt-n12 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              CEO / Apex Technologies US
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              Ryan Donaher
            </h4>

            <p class="text--secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
            </p>

            <v-btn
              class="mr-0"
              color="primary"
              min-width="100"
              rounded
            >
              Follow
            </v-btn>
          </v-card-text>
        </app-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <app-card class="mt-4 text-center">
          <v-img
            class="rounded-circle elevation-6 mt-n12 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              Team Manager
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              EJ Feulner
            </h4>

            <p class="text--secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
            </p>

            <v-btn
              class="mr-0"
              color="primary"
              min-width="100"
              rounded
            >
              Follow
            </v-btn>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>

    <v-row justify="center">
    <v-col
      cols="12"
      md="6"
    >
      <app-card class="mt-4 text-center">
        <v-img
          class="rounded-circle elevation-6 mt-n12 d-inline-block"
          src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
          width="128"
        />

        <v-card-text class="text-center">
          <h6 class="text-h6 mb-2 text--secondary">
            Technical Director
          </h6>

          <h4 class="text-h4 mb-3 text--primary">
            Chris Barrott
          </h4>

          <p class="text--secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
          </p>

          <v-btn
            class="mr-0"
            color="primary"
            min-width="100"
            rounded
          >
            Follow
          </v-btn>
        </v-card-text>
      </app-card>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card class="mt-4 text-center">
        <v-img
          class="rounded-circle elevation-6 mt-n12 d-inline-block"
          src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
          width="128"
        />

        <v-card-text class="text-center">
          <h6 class="text-h6 mb-2 text--secondary">
            Sporting Director
          </h6>

          <h4 class="text-h4 mb-3 text--primary">
            Jamie Conway
          </h4>

          <p class="text--secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
          </p>

          <v-btn
            class="mr-0"
            color="primary"
            min-width="100"
            rounded
          >
            Follow
          </v-btn>
        </v-card-text>
      </app-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default { name: 'UserProfileView' }
</script>
