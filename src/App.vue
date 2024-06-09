<template>
  <div id="app">
    <Header />
    <Title />
    <MasterCall />
    <Services />
    <Metrics />
    <Preferences />
    <Note />
    <Call />
    <Footer />
    <ScrollButton />
  </div>
</template>

<script>
import Header from './components/sections/Header.vue'
import MasterCall from './components/MasterCall.vue'
import Services from './components/Services.vue'
import Metrics from './components/sections/Metrics.vue'
import Preferences from './components/Preferences.vue'
import Note from './components/Note.vue'
import Call from './components/Call.vue'
import Footer from './components/Footer.vue'
import Title from './components/Title.vue'
import ScrollButton from './components/ScrollButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    MasterCall,
    Services,
    Metrics,
    Preferences,
    Note,
    Footer,
    Title,
    Call,
    ScrollButton,
  },
}
</script>

<style lang="sass">
@import 'scss/app/defaults'

</style>
