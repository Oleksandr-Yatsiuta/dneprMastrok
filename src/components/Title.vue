<template>
  <section class="section is-site-opening is-showcase">
    <div class="dimmer">
      <Container>
        <div class="menu">
          <img src="../img/logo.png" class="dnepr-class-img" />
          <div class="menu-union">
            <a href="#prices-page" class="menu-click"> Послуги та ціни </a>
            <a href="#preferences" class="menu-click"> Наші переваги </a>
            <a href="#dimmed" class="menu-click"> Контакти </a>
          </div>
        </div>

        <Row class="title-slide columns-between-tablet">
          <Column class="left-column opening">
            <h1 class="main-title">
              АВАРІЙНЕ<br />
              ВІДКРИТТЯ ЗАМКІВ
            </h1>
            <ul class="list">
              <li>- ВІДКРИВАЄМО ВСІ ВИДИ ЗАМКІВ</li>
              <li>- ПРИЇДЕМО ПРОТЯГОМ 20 ХВИЛИН</li>
              <li>- БЕЗ ПОШКОДЖЕННЯ ЗАМКА</li>
              <li>- КОНФІДЕНЦІЙНО</li>
              <li class="tab">ВІД 300 грн</li>
            </ul>
            <div class="buttons">
              <ModalWindow buttonText="ВИКЛИКАТИ МАЙСТРА"></ModalWindow>
              <a href="tel:0661720352" class=" button cost-calculation">
                РОЗРАХУНОК ВАРТОСТІ
              </a>
            </div>
          </Column>

          <Column class="mobile right-column">
            <img src="../img/contact-phone.png" class="title-image" />
          </Column>
        </Row>
      </Container>
    </div>
  </section>
</template>

<script>
import Container from "../components/layout/Container";
import ModalWindow from "../components/ModalWindow";
import Row from "@/components/layout/Row";
import Column from "@/components/layout/Column";

export default {
  name: "Title",
  components: {
    Column,
    Row,
    Container,
    ModalWindow,
  },
};
</script>

<style lang="scss" scoped>
@import "./../scss/layout/media-querries";
@import "./../scss/layout/mixins.scss";

.section {
  background-image: url("../img/bg-first-section.png");
  background-attachment: fixed;
  background-size:cover;
  background-position-y:cover;
  background-repeat: no-repeat;
}

.dimmer {
  background-color: rgba(245, 239, 239, 0);

  .container {
    padding: 2rem 1rem;
  }
}
.opening {
  text-align: left;
}

.title-image {
  width: 250px;
  margin-top: 3rem;
}

.buttons {
  @include mobile-only {
    text-align: center;
  }

  @include from-desktop {
    display: flex;
    align-items: baseline;
  }
}

.cost-calculation {
  color: white;
  text-decoration: none;
  background-color: $orange;
  padding: 1em 2em;
  border-radius: 30px;
}

.cost-calculation:hover {
  background-color: $button-hover-color;
}

.list > li {
  margin-top: 25px;
}

.tab {
  margin-left: 80px;
}

.main-title {
  font-size: 50px;
  color: black;
  font-weight: 600;
  margin-bottom: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  color: black;
  font-size: 22px;
}

.menu-click {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: black;
}

.menu-click:hover {
  text-decoration: none;
  color: white;
}

.menu-union {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 50px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 50px 0;
}

@media screen and (min-width: 768px) {
  .title-image {
    margin-top: 0;
  }
}

@media screen and (min-width: 1024px) {
  .menu {
    justify-content: space-between;
  }

  .menu-union {
    max-width: 55%;
  }
}

@media screen and (max-width: 1024px) {
  .main-title {
    font-size: 40px;
  }

  .menu-click {
    padding: 0 15px;
  }
}

@media screen and (max-width: 769px) {
  .menu-click {
    font-size: 15px;
  }

  .list {
    font-size: 18px;
    text-align: center;
  }

  .main-title {
    font-size: 30px;
    text-align: center;
  }

  .title-image {
    width: 200px;
    margin-bottom: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu-union {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .menu-click {
    font-size: 17px;
  }

  .a-m {
    margin: 0;
  }

  .button.cost-calculation {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 426px) {
  .a-m {
    margin-right: 0;
  }

  .main-title,
  .list {
    text-align: center;
  }

  .dnepr-class-img {
    margin-top: 20px;
    width: 252px;
    height: 110px;
  }

  .section {
    min-height: 100vh;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }

  .menu-union {
    flex-direction: column;
    width: 100%;
  }

  .menu-click {
    margin-bottom: 10px;
    font-size: 20px;
  }
}

@media screen and (max-width: 376px) {
  .title-image {
    width: 180px;
  }
}

@media screen and (max-width: 321px) {
  .title-image {
    width: 170px;
  }

  .dimmer{
    background-color: rgba(245, 239, 239, 0);
  }

  .button.cost-calculation {
    margin-bottom: 30px;
  }

  .main-title {
    font-size: 26px;
  }

  .list {
    font-size: 17px;
  }
}
</style>