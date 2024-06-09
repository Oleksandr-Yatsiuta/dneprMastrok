<template>
  <div>
    <button class="top-button">
      <font-awesome-icon class="icon" icon="arrow-up" />
    </button>
  </div>
</template>

<style scoped>
.top-button {
  color: white;
  background-color: black;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>

<script>
export default {
  name: "ScrollButton",
  mounted() {
    let scrollbtn = document.querySelector(".top-button");
    window.onscroll = function () {
		if(window.scrollY != 0){
			scrollbtn.style.display = "block";
		}
		else{
			scrollbtn.style.display = "none";
		}
    };
	scrollbtn.onclick = function(){
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
	}
}
</script>
