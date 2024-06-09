<template>
  <!-- Card template-->
  <a class="card-link" :href="card.link">
    <figure class="column card is-horizontal">
      <!-- icon (required) -->
<!--      <header class="card-icon">-->
<!--        <font-awesome-icon :icon="card.icon"/>-->
<!--      </header>-->
      <!-- subheading or text (required) -->
      <figcaption class="card-text">
        {{ card.text }}
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'CardIsHorizontal',
  props: {
    card: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="sass" scoped>
@import './../../scss/app/defaults'
@import '../../scss/app/colors'
@import '../../scss/layout/media-querries'

$cards-section-padding: 30px 0

$card-color: white
$card-icon-size: 50px
$card-padding: .25em
$card-icon-size-mobile: 25px
$card-icon-size-desktop: 20px

// text config (subtitle)
$card-font-size-mobile: $default-page-font-size
$card-font-size-desktop: 17px

$card-link-hover: $deep-orange
.card-link
  transition: .6s
  color: $card-color
  &:hover
    color: $card-link-hover

.card.is-horizontal
  .card-icon
    padding: $card-padding
    font-size: $card-icon-size-mobile

  .card-text
    padding: $card-padding
    font-size: $card-font-size-mobile

.card.is-horizontal
    @include from-desktop
      display: flex
      align-items: center

      .card-icon 
        font-size: $card-icon-size-desktop

      .card-text 
        font-size: $card-font-size-desktop
</style>