<template>
  <v-content>
    <div class="staticBanner">
      <v-img
        :aspect-ratio="16 / 9"
        :height="350"
        :width="width"
        src="../assets/images/ck.png"
      >
        <v-row align="end" class="lightbox black--text pa-2 fill-height">
          <v-container>
            <v-col>
              <div class="headline">Contact Us</div>
            </v-col>
          </v-container>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="message"
            required
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Submit
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Reset
          </v-btn>
        </v-form>
      </v-container>
    </div>
    <div class="googlemap">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29987.21103716626!2d38.756021014576675!3d8.918253194044832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b837570f9a759%3A0x8232b0c0b8fdf46d!2sAkaki%20Kality%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1602652952946!5m2!1sen!2set"
          width="100%"
          height="450"
         
        ></iframe>

    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  valid: true,
  message: "",
  messageRules: [
    v => !!v || "Message is required",
    v => (v && v.length >= 10) || "Message must be more than 10 characters"
  ],

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
