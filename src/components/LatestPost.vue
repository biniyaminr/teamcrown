<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest post</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card outlined class="mx-auto">
            <v-img class="white--text align-end" height="200px" :src="item.src">
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ item.subtitle }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Startup Fund Finder",
          subtitle: "Startup Fund Finder",
          description: "Build a system that can connect small startups with potential companies and Investors in the department",
          src: require("../assets/images/startup.jpg")
        },
        {
          id: 2,
          title: "Property Rental",
          subtitle: "Property Rental",
          description: "Virtual queue is neccesary to dicrease the hasstle everyone faces in different places by having queue before going to the place",
          src: require("../assets/images/retal.jpg")
        },
        {
          id: 3,
          title: "Virtual Queue",
          subtitle: "Virtual Queue",
          description: "Virtual queue is neccesary to dicrease the hasstle everyone faces in different places by having queue before going to the place",
          src: require("../assets/images/queues.jpg")
        }
      ]
    };
  }
};
</script>
