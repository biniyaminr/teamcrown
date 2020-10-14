<template>
  <v-content>
    <div class="staticBanner">
      <v-img
        :aspect-ratio="16 / 9"
        :height="350"
        :width="width"
        src="../assets/images/ck.png"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-container>
            <v-col>
              <div class="headline">About Us</div>
            </v-col>
          </v-container>
        </v-row>
      </v-img>
    </div>

    <div class="block">
      <v-container>
        <p>
          this is paragraph about us Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quod adipisci doloribus aliquid cupiditate eum
          nesciunt sint quasi tenetur, obcaecati ipsam vero iure modi optio
          architecto similique laborum hic enim atque. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ea accusamus minima iste
          necessitatibus quod nobis exercitationem, dolorum nostrum ipsam, ab
          alias voluptate velit pariatur beatae quibusdam corporis minus omnis
          porro.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="12" sm="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end " 
              height="300px"
              :src="item.src"> </v-img>

              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>

                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/a.jpg"),
          name: "Biniyam Dereje",
          title: "Software Engineer"
        },
        {
          id: 2,
          src: require("../assets/images/team1.jpg"),
          name: "Minasie Alemu",
          title: "Software Engineer"
        },
        {
          id: 3,
          src: require("../assets/images/team2.jpg"),
          name: "Ebsa Teklu",
          title: "Software Engineer"
        },
        {
          id: 4,
          src: require("../assets/images/team3.jpg"),
          name: "Saron Engidasew",
          title: "Software Engineer"
        },
        {
          id: 5,
          src: require("../assets/images/team4.jpg"),
          name: "Betsegaw Gizaw",
          title: "Software Engineer"
        },
        {
          id: 6,
          src: require("../assets/images/team5.jpg"),
          name: "Heran Semere",
          title: "Software Engineer"
        }
      ]
    };
  }
};
</script>
