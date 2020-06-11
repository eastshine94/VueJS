<template>
  <div class="home">
    <h1>This is Home page</h1>
    <form>
      <InputField v-model="name"/>
      <br><button @click.prevent ="updateName">Submit</button>
    </form>
    <p>{{name}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import InputField from '@/components/InputField.vue'
@Component({
  components: {
    InputField
  }
})
export default class Home extends Vue {
  name = 'teeee'
  updateName () {
    this.name = 'change Name'
  }

  beforeCreate () {
    console.log('beforeCreate', this.name)
  }

  created () {
    console.log('created', this.name)
  }

  beforeMount () {
    alert('beforeMount')
  }

  // dom 컨트롤하고 싶을 때 여기서
  mounted () {
    alert('Mount')
  }

  beforeUpdate () {
    alert('beforeUpdate')
  }

  updated () {
    alert('updated')
  }

  beforeDestroy () {
    alert('beforeDestroy')
  }

  destroyed () {
    alert('destroyed')
  }
}
</script>
<style>
  h1{
    color: red;
  }
</style>
