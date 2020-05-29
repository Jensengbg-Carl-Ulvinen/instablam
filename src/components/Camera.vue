<template>

    <div id="camera">
        <video :srcObject.prop.camel="this.$store.state.stream" playsinline autoplay class="video"></video>
    </div>

</template>

<script>
export default {
  async mounted() {
    console.log("Camera lens is active")
    try {
        const cameraLens = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }});
        this.$store.state.stream = cameraLens;
    }   catch (error) {
            console.log('somethig went wrong!');
        }
  },

}

</script>

<style lang='scss'>
.video {
  width: 75vw;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

@media only screen and (min-width: 780px) {
  .video {
    width: 50vw;
  }
}
</style>