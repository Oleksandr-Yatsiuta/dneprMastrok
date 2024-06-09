<template>
  <!-- 
	На сайте будут 2 флага (Украины и Рашки),
	при нажатии меняется язык на сайте
	будем подставлять переменные в vuejs {{}}
	//! js : делаем по принципу ключ значении (key = "Ключ")  -->

  <div>
    <section class="multi-body">
      <!--  card  -->
      <a class="card-link">
        <figure class="column card is-horizontal">
          <!-- icon (required) -->
          <header class="card-icon">
            <a href="#" class="ua-flag-button" id="ua"
              ><img src="../img/flags/ua-flag.png" alt="Ukraine-flag"
            /></a>
          </header>

          <!-- subheading or text (required) -->
          <figcaption class="card-text">Ua</figcaption>
        </figure>
      </a>

      <!--  card  -->
      <a class="card-link">
        <figure class="column card is-horizontal">
          <!-- icon (required) -->
          <header class="card-icon">
            <a href="#" class="ru-flag-button lang" id="ru"
              ><img src="../img/flags/ru-flag.png" alt="Russia-flag"
            /></a>
          </header>

          <!-- subheading or text (required) -->
          <figcaption class="card-text">Ru</figcaption>
        </figure>
      </a>
    </section>
  </div>
</template>


<script>
</script>

<style lang="scss" scoped>
@import "../scss/app/colors";
@import "../scss/layout/media-querries";

// TODO: refactor and gather old styles and new
$cards-section-padding: 30px 0;

$card-icon-size: 50px;
$card-color: white;

// card configs (general)
$default-card-padding: 0.25em;

// icon configs
$mobile-icon-size: 25px;
$desktop-icon-size: 20px;

// text config (subtitle)
$mobile-font-size: 17px;
$desktop-font-size: 17px;

.card-link {
  color: $card-color;
  text-decoration: none;
}

.multi-body{
  display: flex;
}

.card {
  // карточки в хедере
  &.is-horizontal {
    .card-icon {
      padding: $default-card-padding;
      font-size: $mobile-icon-size;

      img {
        max-width: 30px;
      }
    }

    .card-text {
      padding: $default-card-padding;
      font-size: $mobile-font-size;
    }

    @include from-desktop {
      display: flex;
      align-items: center;

      .card-icon {
        font-size: $desktop-icon-size;
      }

      .card-text {
        font-size: $desktop-font-size;
      }
    }
  }
}
</style>