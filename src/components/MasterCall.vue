<template>
  <section>
    <Container>
      <div class="communication">
        <div class="title">
          <h2 class="title" data-v-3e51d18e="">Викликати майстра</h2>
        </div>
        <div class="com-container">
          <div class="vodafone">
            <div class="logo">
              <img src="../img/vodafone.png" alt="" />
            </div>
            <div class="number">
              <a href="tel:0661720352">+38 066 172-03-52</a>
            </div>
          </div>
          <div class="call-back">
            <div class="backcall">
              <ModalWindow button-text="Зворотній дзвінок"></ModalWindow>
            </div>
            <div class="call-soon">
              <p>Передзвонимо протягом 3-5 хвилин</p>
            </div>
          </div>
          <div class="kyivstar">
            <div class="logo">
              <img src="../img/kyivstar.png" alt="" />
            </div>
            <div class="number">
              <a href="tel:0977533460">+38 097 753-34-60</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>


<script>
import Container from "../components/layout/Container";
import ModalWindow from "@/components/ModalWindow";

export default {
  name: "MasterCall",
  components: {
    ModalWindow,
    Container,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/layout/media-querries";

.communication {
  margin-bottom: 50px;
  padding-top: 50px;
}

.com-container {
  display: flex;
  flex-direction: column;
}

.kyivstar,
.vodafone,
.call-back {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @include to-desktop {
    margin-bottom: 1rem;
  }
}

.call-back {
  @include to-desktop {
    margin-top: 30px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
}

.logo,
.backcall {
  margin-bottom: 15px;
}

.number a {
  text-decoration: none;
  color: #54617a;
  font-size: 20px;
}

.backcall a {
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  background-color: #fab619;
  border-radius: 5px;
  font-size: 12px;
}

.backcall a:hover {
  background-color: #fac019;
}

.call-soon p {
  color: #54617a;
}

.logo img {
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .com-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
  }

  .kyivstar,
  .vodafone,
  .call-back {
    max-width: 30%;
    text-align: center;
  }

  .backcall a {
    font-size: 15px;
  }

  .number a {
    font-size: 22px;
  }
}

@media screen and (min-width: 1024px) {
  .communication {
    margin-bottom: 100px;
  }

  .number a {
    font-size: 25px;
  }

  .logo img {
    width: 170px;
  }

  .logo {
    margin-bottom: 0;
  }

  .call-soon p {
    font-size: 18px;
  }
}

@media screen and (min-width: 1440px) {
  .backcall a {
    font-size: 20px;
  }

  .number a {
    font-size: 25px;
  }

  .call-soon p {
    font-size: 18px;
  }

  .logo img {
    width: 180px;
  }
}
</style>
