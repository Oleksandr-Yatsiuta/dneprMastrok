<template>
  <Container>
    <Row class="columns-between columns-centered-mobile cards">
      <Card v-for="card in cards" :key="card.icon"
            :card="card"/>
    </Row>
  </Container>
</template>

<script>
import Container from '../layout/Container.vue';
import Row from "@/components/layout/Row";
import Card from '../cards/VerticalCard.vue';

export default {
  name: 'Metrics',
  components: {
    Row,
    Card,
    Container,
  },
  data() {
    return {
      cards: [
        {
          icon: 'truck',
          title: '20 хвилин',
          text: 'ПРИБУТТЯ МАЙСТРА',
        },
        {
          icon: 'lock-open',
          title: 'до 30 хвилин',
          text: 'ВІДКРИТТЯ ЗАМКУ',
        },
        {
          icon: 'check-circle',
          title: '100%',
          text: 'РЕЗУЛЬТАТ',
        },
        {
          icon: 'user-circle',
          title: 'на 100%',
          text: 'ОФІЦІЙНО',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/layout/media-querries';


$cards-section-padding: 2rem 0;

.cards {
  padding: $cards-section-padding;

  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

</style>