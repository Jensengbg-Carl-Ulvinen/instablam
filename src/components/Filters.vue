<template>
<div>

<!-- buttonz -->
<div class="buttons"> 
      <button v-on:click="lomo" >Lomo</button>
      <button v-on:click="greyscale" >Gråskala</button>
      <button v-on:click="vintage" >Vintage</button>
</div>

<!-- sliderz -->
<div class="sliders">
      <label for="bright">Ljus</label>
      <input type="range" min="0" max="100" value="0" step="5" v-on:change="bright"  class="slider">
      <label for="Vibrance">Vibrans</label>
      <input type="range" min="0" max="100" value="0" step="5" v-on:input="vibrance"  class="slider">
      <label for="Contrast">Kontrast</label>
      <input type="range" min="0" max="100" value="0" step="5" v-on:input="contrast"  class="slider">
</div>

<!-- resetz -->
<div class="resets">
  <button @click="reset">Återställ</button>
  <!-- ful lösning nr1 -->
  <button onClick="window.location.reload();">Ta nytt kort</button>
</div>

</div>
</template>

<script>
export default {

  methods: {

      bright(data) {
        const inputValue = parseInt(data.target.value)
        
          this.Caman("#myCanvas", function () {
            this.revert();
            this.brightness(inputValue)
            this.render();
          })
      },

      vibrance(data) {
        const inputValue = parseInt(data.target.value)

          this.Caman("#myCanvas", function () {
            this.revert();
            this.vibrance(inputValue)
            this.render();
          })
      },

      contrast(data) {
        const inputValue = parseInt(data.target.value)
        
          this.Caman("#myCanvas", function () {
            this.revert();
            this.contrast(inputValue)
            this.render();
          })
      },

      greyscale() {
        this.Caman("#myCanvas", function () {
          this.greyscale()
          this.render();
        })
      },

      vintage() {
        this.Caman("#myCanvas", function () {
          this.vintage()
          this.render();
        })
      },

      lomo() {
        this.Caman("#myCanvas", function () {
          this.lomo()
          this.render();
        })
      },

    reset() {
      this.Caman("#myCanvas", function () {
          this.revert();
      })
    },

  },

}

</script>

<style lang='scss'>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
}

.sliders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}

.resets {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.slider {
  background: #c6c6c6;
  border: solid 1px rgb(46, 46, 46);
  width: 100%;
  height: 25px;
  outline: none;
  opacity: 0.5;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
  background: rgb(101, 101, 101);
  border: solid 1px rgb(101, 101, 101);
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  background: rgb(101, 101, 101);
  border: solid 1px rgb(101, 101, 101);
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}
</style>