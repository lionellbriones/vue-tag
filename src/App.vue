<script lang="ts">
import { event } from 'vue-gtag'
export default {
  methods: {
    buttonClick() {
      event('button_click', {
        event_category: 'engagement',
        event_label: 'click',
        value: 1
      })
    }
  },
  mounted() {
    console.log('App mounted!')
  }
}
</script>

<template>
  <div>Home</div>
  <div>1. Track button click</div>
  <button @click="buttonClick">Click</button>
</template>

<style scoped></style>
