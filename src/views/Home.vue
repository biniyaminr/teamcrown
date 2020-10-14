<template>
    <v-content>
     <Banner/>
     <Gallery/>
     <LatestPost/> 

    </v-content>
</template>

<script>
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import LatestPost from "../components/LatestPost";
export default {
  name: "Home",

  components: {
    Banner,
    Gallery,
    LatestPost
  },

  data() {
    return {
      items: []
    };
  }
};
</script>
