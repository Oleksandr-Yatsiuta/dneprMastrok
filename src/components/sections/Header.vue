<template>
  <header class="site-header">

    <Container>
      <Row class="columns-between">

        <!-- left column -->
        <Column class="column left-column">
          <CardIsHorizontal :card="cards[0]"></CardIsHorizontal>
        </Column>

        <!-- right column -->
        <Column class="column right-column">
          <CardIsHorizontal :card="cards[1]"></CardIsHorizontal>
          <CardIsHorizontal :card="cards[2]"></CardIsHorizontal>
          <CardIsHorizontal :card="cards[3]"></CardIsHorizontal>
        </Column>
      </Row>
      <!-- right column end-->
    </Container>
  </header>
</template>

<style lang="sass" scoped>
@import '../../scss/layout/helpers'

$header-padding: .5em 0
$header-font-color: white
$header-background: #485D7D

.site-header 
  padding: $header-padding
  background-color: $header-background
  color: $header-font-color

.card 
  max-width: 100%

.clock 
  max-width: 18px

.site-header,
a 
  color: white

@media (max-width: 767px) 
  header 
    display: none
</style>

<script>
import Container from '../layout/Container';
import Row from "./../../components/layout/Row";
import Column from "./../../components/layout/Column";
import CardIsHorizontal from "./../cards/HorizontalCard";

export default {
  name: "Header",
  components: {
    CardIsHorizontal,
    Column,
    Row,
    Container,
  },
  data() {
    return {
      cards: [
        {
          // icon: 'lock',
          title: '',
          text: 'Відкриваємо замки будь-якої складності',
        },
        {
          // icon: 'clock',
          title: '',
          text: 'Працюємо цілодобово',
        },
        {
          // icon: 'mobile',
          title: '',
          text: '066 172-03-52',
          link: 'tel:0661720352',
        },
        {
          // icon: 'mobile',
          title: '',
          text: '097 753-34-60',
          link: 'tel:0977533460',
        },
      ]
    }
  }
};
</script>
