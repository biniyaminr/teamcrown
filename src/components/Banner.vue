<template>
  <div class="bannerBlock">
    <v-carousel hide-delimiters cycl>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title hidden-xs-only" align="center" justify="center">
          <div>
            {{ item.title }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",

  data() {
    return {
      items: [
        {
          src:
           require("../assets/images/ck.png"),
          title: "We are Professional"
        },
        {
          src:
          require("../assets/images/ck.png"),
          title: "We are Creative"
        },
        {
          src:
            require("../assets/images/ck.png"),
          title: "We are hard worker"
        }
      ]
    };
  }
};
</script>
