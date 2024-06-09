<template lang="pug">
  section.row
    slot
</template>
<script>

export default {
  name: 'Row',
}

</script>

<style lang="sass" scoped>
@import './../../scss/layout/media-querries.scss'

/* Column configs */
$left-column-width: 100%
$right-column-width: 100%
$right-column-display: flex

.row
  display: block
  @include from-tablet
    display: flex
    align-items: center

  &.columns-centered
    &-mobile
      @include mobile-only
        .column
          margin: 0 auto 2rem auto

  // enables only from tablet
.columns-between
  justify-content: space-between
  &-tablet
    @include from-tablet
      justify-content: space-between
  &-desktop
    @include from-desktop
      justify-content: space-between

  // when space is not enough
  // and two columns on a tablet
  &.two-columns

    // немного адаптивов не помешает
    @include from-tablet
      flex-wrap: wrap
      .column
        width: 50%

    @include from-desktop
      .column
        width: auto
        padding: 0 1em

// a row with columns between
.columns-between
  .left-column
    flex: 1 0 30%

  .right-column
    flex: 1 1 70%
    text-align: center
    @include from-tablet
      display: flex
      justify-content: flex-end

// section-specific hotfixes [TODO]
// Header.vue
.site-header
  .left-column
    flex: 1 0 45%
  .right-column
    justify-content: space-around
    flex: 1 1 55%

// Title.vue
.title-slide
  .left-column
    flex: 1 0 50%

  @include from-desktop
    justify-content: space-around

    .left-column
      flex: none



</style>