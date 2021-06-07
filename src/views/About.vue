<template>
  <div class="about">
    <Conversion></Conversion>
  </div>
</template>
<script>
import Conversion from  "@/components/conversion.vue"
export default {
  data() {
    return {
      property: 'value',
    }
  },
  components: {
    Conversion
  },
}
</script>