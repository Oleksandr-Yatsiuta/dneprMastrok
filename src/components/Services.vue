<template>
  <section id="prices-page" class="prices-page">
    <section class="title-prices-page">
      <div class="title-block">
        <h2 class="title">НАШІ ПОСЛУГИ І ЦІНИ</h2>
      </div>
      <div class="categories">
        <p class="category">
          Ціна послуг відкриття замків залежить від конструкції замку та ступеня
          складності поломки
        </p>
        <p class="category">Хибний виклик — 500 грн.</p>
        <p class="category">Простій майстра — 1 година — 1000 грн.</p>
      </div>
    </section>
    <section class="main">
      <div class="service">
        <img src="../img/door-open.jpg" alt="" class="service-img" />
        <h3 class="service-title">ТЕРМІНОВЕ ВІДКРИТТЯ ДВЕРЕЙ</h3>
        <p class="explanation-of-service">
          Вартість від 400 грн<br />
          залежить від ступеня складності замку
        </p>
      </div>

      <div class="service">
        <img src="../img/open-door-2.png" alt="" class="service-img" />
        <h3 class="service-title">ТЕРМІНОВЕ ВІДКРИТТЯ АВТО</h3>
        <p class="explanation-of-service">
          Вартість від 400 грн<br />
          залежить від ступеня складності замку
        </p>
      </div>

      <div class="service">
        <img src="../img/open-safe-2.png" alt="" class="service-img" />
        <h3 class="service-title">ТЕРМІНОВЕ ВІДКРИТТЯ СЕЙФУ</h3>
        <p class="explanation-of-service">
          Вартість від 400 грн<br />
          залежить від ступеня складності замку
        </p>
      </div>

      <div class="service">
        <img src="../img/change-lock.jpg" alt="" class="service-img" />
        <h3 class="service-title">ЗАМІНА ЗАМКІВ</h3>
        <p class="explanation-of-service">
          Вартість від 400 грн<br />
          залежить від ступеня складності замку
        </p>
      </div>

      <div class="service">
        <img src="../img/change-latch-2.png" alt="" class="service-img" />
        <h3 class="service-title">ЗАМІНА НІЧНОЇ ЗАСУВКИ</h3>
        <p class="explanation-of-service">
          Вартість від 400 грн<br />
          залежить від ступеня складності замку
        </p>
        <ModalWindow buttonText="ТЕРМІНОВО ВИКЛИКАТИ МАЙСТРА"></ModalWindow>
      </div>

      <div class="clarify-price">
        <img src="../img/logotype-viber.png" class="sn" />
        <h3 class="clarify">УТОЧНИТИ ВАРТІСТЬ</h3>
        <p class="calculation">Для точного розрахунку надішліть фото замка</p>
        <p class="click-to-send">натисніть, щоб відправити фото</p>
        <a class="to-master" href="">НАДІСЛАТИ ФОТО</a>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "./../scss/app/colors.sass";
@import "./../scss/layout/mixins.scss";

/* услуги и цены */
.to-master {
  @include for-all-buttons($deep-orange, $deep-orange);

  .to-master:hover {
    background-color: $button-hover-color;
  }
}

.click-to-send {
  margin-bottom: 35px;
  margin-top: 5px;
}

.calculation {
  margin: 0;
  text-align: center;
}

.clarify {
  margin-top: 20px !important;
  text-align: center;
  margin-bottom: 5px;
  font-size: 21px;
  font-weight: 300;
}

.clarify-price {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 26%;
}

.sn {
  max-width: 100%;
  height: 150px;
  margin: 0;
}

.title-of-call {
  text-align: center;
  color: white;
}

.give-call {
  background-color: $orange;
  width: 230px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-decoration: none;
}

.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}



.explanation-of-service {
  margin: 0 0 5px 0;
  text-align: center;
  color: $light-grey;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 26%;
}

.service-title {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 23px;
  color: $grey;
  font-weight: 400;
}

.service-img {
  width: 350px;
  height: 200px;
  margin-top: 20px;
  @include img-rounded(20px);
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
}

.title-block {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.title {
  font-weight: 100;
  font-size: 45px;
  text-align: center;
  margin: 0 0 .75em 0;
}

.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category {
  margin: 5px;
  color: $light-grey;
  text-align: center;
  font-size: 17px;
}

.prices-page {
  background-color: #dde4ed;
  padding: 50px 0;
}

@media screen and (max-width: 1440px) {
  .click-to-send {
    font-size: 17px;
  }

  .calculation {
    font-size: 17px;
  }

  .clarify {
    font-size: 23px;
  }

  .clarify-price {
    margin: 10px;
    width: 380px;
  }

  .sn {
    max-width: 100%;
    height: 200px;
    margin-top: 20px;
  }

  .service-img {
    width: 380px;
    height: 240px;
  }

  .service {
    width: 380px;
    margin: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 45px;
  }

  .click-to-send {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .calculation {
    font-size: 14px;
  }

  .clarify-price {
    width: 310px;
  }

  .service {
    width: 310px;
    margin: 10px;
  }

  .service-img {
    width: 272px;
    height: 150px;
  }
  
  .sn{
    height: 150px;
  }
}

@media screen and (max-width: 768px) {
  .clarify-price {
    margin-top: 0;
  }

  .service {
    margin: 10px;
    width: 310px;
  }

  .service-title {
    font-size: 19px;
  }

  .clarify-price {
    width: 310px;
  }

  .sn{
    margin-top: 30px;
  }
}
</style>

<script>
import ModalWindow from "../components/ModalWindow";

export default {
  name: "Services",
  components: {
    ModalWindow,
  },
};
</script>