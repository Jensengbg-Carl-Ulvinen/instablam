<template>
  <div>
    <section class="top">
      <div class="title">
      <h1>Instablam</h1>
    </div>
    </section>
<Camera />
<Pictures />
  </div>
</template>

<script>
import Camera from '../components/Camera'
import Pictures from '@/components/Pictures.vue'

export default {
  data: () => ({
    
    }),
  name: 'Instablam',
  components: {
    Camera,
    Pictures,

  },
  
}
</script>

<style lang="scss">
body {
  background-color: rgb(41, 41, 41);
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.103);
  margin: 1rem;
}

.top {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

h1 {
  color: white;
}
</style>
