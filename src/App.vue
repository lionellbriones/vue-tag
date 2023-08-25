<script lang="ts">
import { event } from 'vue-gtag'

export default {
  methods: {
    buttonClick() {
      event('conversion', {
        send_to: 'AW-609295062/OBh-CJKJ-9YYENa1xKIC',
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
