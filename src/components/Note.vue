<template>
  <section class="note">
        <div class="line1"></div>
            <section class="union">
            <div class="note-title">
                <h5 class="title-note">ПРИМІТКА</h5>
            </div>
            <div class="only-documents">
                <p class="notes">
                Всі роботи з аварійного відкриття замків здійснюються ТІЛЬКИ за<br />
                наявності документів на об'єкт, що вскривається!
                </p>
            </div>
            </section>
        <div class="line2"></div>
  </section>
</template>

<style>
@media screen and (max-width: 1024px) {
  .notes {
    font-size: 15px !important;
  }
  .title-note {
    font-size: 20px !important;
  }
}

.line1, .line2{
    width: 2px;
    height: 250px;
    background-color: #F86F21;
}

.notes {
  font-size: 18px;
  margin: 5px;
  color: #485D7D;
  text-align: center;
  font-weight: 300;
}
.title-note {
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 5px;
  color: #f86f21;
}
.union {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.note {
  background-color: #dde4ed;
  height: 250px;
  padding: 2.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media screen and (max-width: 580px){
  .line1, .line2{
    display: none;
  }
}
</style>

<script>
export default {
  name: "Note",
};
</script>