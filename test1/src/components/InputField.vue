<template>
    <div>
        <label for="">Name</label>
        <input
            type="text"
            :value="name"
            style="padding: 30px; border:1px solid green"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class InputField extends Vue {
    @Prop({ type: String, required: true }) private name!: string;
    updatedName (e: Event) {
      const element = e.target as HTMLInputElement
      const value = element.value
      // 자식에서 부모로 값을 전달
      this.$emit('update-name', value)
    }
}

</script>
