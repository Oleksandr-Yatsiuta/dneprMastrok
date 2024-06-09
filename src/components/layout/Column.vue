<template lang="pug">
  .column
    slot
</template>

<style lang="sass">
@import '../../scss/layout/media-querries.scss'

.column
  @include mobile-only
    margin: 0 auto
</style>

<script>
export default {
  name: "Column"
}
</script>