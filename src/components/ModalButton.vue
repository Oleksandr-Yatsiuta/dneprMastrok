<template>
  <button class="button is-modal-opener"> {{ text }} </button>
</template>

<script>
export default {
  name: "ModalButton",
  props: ['text'],
}
</script>

<style lang="scss" scoped>
@import '../scss/app/colors';
@import '../scss/layout/media-querries';

.button {
  @include to-desktop {
    margin: 0 0 1.5rem 0;
  }

  &.is-modal-opener {
    font-size: 1em;
    cursor: pointer;
    color: white;
    background-color: $deep-orange;
    border: none;
    padding: 1em 2em;
    border-radius: 30px;

    .opening & {
      @include from-desktop {
        margin: 0 1rem 0 0;
      }
    }

    &:hover {
      text-decoration: none;
      color: white;
      background-color: $button-hover-color;
    }
  }
}

</style>