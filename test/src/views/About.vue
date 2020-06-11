<template>
  <div class="about">
    <Name title ="This is an about page">
        <template #header = "props">
          <h1>hello header {{props.person}}</h1>
        </template>
        <template #body>
          <h1>hello Body</h1>
        </template>
        <template #default>
          <h1>hello footer</h1>
        </template>
    </Name>
  </div>
</template>

<script lang="ts">
import Name from '@/components/Name.vue'
export default {
  components: {
    Name
  }
}
</script>
