<template>
  <div class="home">
    <Name title ="This is Home page"/>
    <form>
      <InputField v-model="name"/>
      <br><button>Submit</button>
    </form>
    <p>{{name}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Name from '@/components/Name.vue'
import InputField from '@/components/InputField.vue'
@Component({
  components: {
    Name,
    InputField
  }
})
export default class Home extends Vue {
  name = ''
}
</script>
<style>
  h1{
    color: red;
  }
</style>
