<template>
  <div class="home">
    <h1>This is Home page</h1>
    <Name/>
  </div>
</template>

<script>
import Name from "@/components/Name.vue";
export default {
  components: {
    Name
  },
}
</script>
<style>
  h1{
    color: red;
  }
</style>