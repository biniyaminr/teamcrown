<template>

    <v-content>
      <div class="block text-center notFound">
        <h2>Page not found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>we're sorry, the page you requested could not be found. please go back to the home page</p>
      </div>
    </v-content>

</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {
      items: []
    };
  }
};
</script>
