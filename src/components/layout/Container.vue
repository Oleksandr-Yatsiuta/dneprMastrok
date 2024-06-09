<template>
  <main class="container">
    <slot></slot>
  </main>
</template>


<style lang="scss">
/*

  Classes, used in module:
 * .container
 * .container-has-columns-between
 * .left-column
 * .right-column

*/
@import "../../scss/layout/all";

/* Container configs */
$container-paddings: 0 1rem;

.container {
  @extend .is-centered;
  padding: $container-paddings;

  @include from-tablet {
    max-width: 90%;
  }

  @include from-large-desktop {
    max-width: 70%;
  }
}
</style>

<script>
export default {
  name: "Container",
};
</script>