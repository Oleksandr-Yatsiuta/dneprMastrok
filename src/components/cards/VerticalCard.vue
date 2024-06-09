<template>
    <!-- TODO: wrap every card with a column component -->

    <!-- Card template-->
    <figure class="column card is-vertical">

      <!-- icon (required) -->
      <header class="card-icon">
        <font-awesome-icon :icon="card.icon"/>
      </header>

      <!-- headline (optional) -->
      <main class="card-title">{{ card.title }}</main>

      <!-- subheading or text (required) -->
      <figcaption
          class="card-text">{{ card.text }}
      </figcaption>

    </figure>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/app/colors';
@import '../../scss/layout/media-querries';

$card-icon-size: 50px;
$card-color: $grey;

.card {

  // карточки в Metrics
  &.is-vertical {
    text-align: center;
    color: $card-color;

    @include to-desktop {
      max-width: 50%;
      margin: 0 auto 2rem auto;
    }

    // change card width as screen getting bigger
    @media screen and (min-width: $tablet) {
      width: 50%;
    }
    @media screen and (min-width: $desktop) {
      width: auto;
    }

    .card-icon {
      font-size: $card-icon-size;
      margin: 0 0 1.5rem 0;
    }

    .card-title {
      font-size: 2rem;
      margin: 0 0 1rem 0;
    }

    .card-text {
      color: $orange;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}

</style>