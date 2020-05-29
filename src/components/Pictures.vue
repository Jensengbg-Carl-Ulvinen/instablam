<template>
  <div >
    <button v-on:click="getImage" class="btnPic" >Ta kort</button>
    <Filters />    
    <canvas ref="myCanvas" id="myCanvas" class="savedPic" ></canvas>
  </div>
</template>

<script>

import Filters from '@/components/Filters.vue'

export default {

  components: {
    Filters
  },

  methods: {
    async getImage() {
      console.log("image captured")
        const mediaTrack = this.$store.state.stream.getVideoTracks()[0];
        const getImg = new ImageCapture(mediaTrack);
        const photo = await getImg.takePhoto()
        const data = URL.createObjectURL(photo);
        this.Caman('#myCanvas', data, function() {
          this.render();
        });
    }   
  }
}

</script>

<style lang="scss">
.savedPic {
  margin: 1rem;
  width: 50% !important;
  height: 50% !important;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.btnPic {
  margin-bottom: 1rem;
}

.btnPic:hover {
  background: black;
  margin-bottom: 1rem;
}

button {
  border: none;
  background: rgb(19, 19, 19);
  color: white;
  font-family: monospace;
  padding: 1rem;
  margin: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover {
  background: black;
}
</style>


