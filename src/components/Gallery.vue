<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6" md="4"
        >
          <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/a.jpg")
        },
        {
          id: 2,
          src: require("../assets/images/b.png")
        },
        {
          id: 3,
          src: require("../assets/images/c.png")
        },
        {
          id: 4,
          src: require("../assets/images/d.png")
        },
        {
          id: 5,
          src: require("../assets/images/f.png")
        },
        {
          id: 6,
          src: require("../assets/images/g.png")
        },
        {
          id: 7,
          src: require("../assets/images/z.png")
        },
        {
          id: 8,
          src: require("../assets/images/y.png")
        },
        {
          id: 9,
          src: require("../assets/images/w.png")
        }
      ]
    };
  }
};
</script>
