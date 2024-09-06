<template>
  <div class="loading">
    <div class="fingerprint"></div>
    <h1>
      Опрос <span>свидетелей</span>...
    </h1>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  gap: 3rem;
  text-align: center;

  h1 {
    font-size: 45px;
    font-family: 'Another Danger';
    letter-spacing: 5px;
    letter-spacing: 8px;
    color: white;

    span {
      color: #980735;
      ;
    }
  }

  .fingerprint {
    position: relative;
    width: 250px;
    height: 250px;
    background-image: url(/src/assets/images/finger-white.png);
    background-size: 200px;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/src/assets/images/finger-red.png);
      background-size: 200px;
      background-repeat: no-repeat;
      animation: animateFingerprint 4s ease-in-out infinite
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 8px;
      background: #980735;
      border-radius: 8px;
      filter: drop-shadow(0 0 20px #980735) drop-shadow(0 0 60px #980735);
      animation: animateLine 4s ease-in-out infinite
    }
  }
}

@keyframes animateFingerprint {

  0%,
  100% {
    height: 0%;
  }

  50% {
    height: 100%;
  }
}

@keyframes animateLine {

  0%,
  100% {
    top: 0%;
  }

  50% {
    top: 100%;
  }
}
</style>
