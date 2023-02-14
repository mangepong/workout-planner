<template>
  <button @click="test()">Test</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    test(): void {
      console.log("test");
    }
    
  }
}
</script>