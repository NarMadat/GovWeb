<template>
  <div class="px-8 ml-40 py-4 mt-10">
    <div class="w-full">
      <h3>Please wait</h3>
    </div>

    <div class="load">
      <div class="loader-container" v-if="isLoading">
        <div class="progress-bar">
          <div class="progress" :style="{ width: `${progress}%` }"></div>
        </div>
        <p class="ml-48">Loading...</p>
      </div>
      <div v-else>
        <p v-show="showDoneMessage">Done</p>
      </div>
    </div>

    <div class="text_load flex flex-row gap-16">
      <div>
        <div class="animated-text">
          <h3 class="text-xl flex items-center gap-1" style="animation-delay: 2s;">
            <AppIcon icon="check" size="24px" class="ml-2 text-button-default" />
            Build frame
          </h3>
        </div>

        <div class="animated-text">
          <h3 class="mt-6 text-xl flex items-center gap-1" style="animation-delay: 4s;">
            <AppIcon icon="check" size="24px" class="ml-2 text-button-default" />
            Adding sections
          </h3>
        </div>
      </div>

      <div>
        <div class="animated-text">
          <h3 class="text-xl flex items-center gap-1" style="animation-delay: 6s;">
            <AppIcon icon="check" size="24px" class="ml-2 text-button-default" />
            Run domain
          </h3>
        </div>
        <div class="animated-text">
          <h3 class="mt-6 text-xl flex items-center gap-1" style="animation-delay: 8s;">
            <AppIcon icon="check" size="24px" class="ml-2 text-button-default" />
            Adding content
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isLoading = ref(true);
const showDoneMessage = ref(false);
const progress = ref(0);
const router = useRouter();

onMounted(() => {
  const loadingTime = 9000;
  const increment = loadingTime / 150;

  const progressInterval = setInterval(() => {
    if (progress.value < 150) {
      progress.value += 1;
    } else {
      clearInterval(progressInterval);
    }
  }, increment);

  setTimeout(() => {
    isLoading.value = false;
    clearInterval(progressInterval);
    setTimeout(() => {
      router.push('/done');
    }, 0);
  }, loadingTime);
});
</script>

<style scoped>
.text_load {
  margin-top: 100px;
}

.load {
  position: absolute;
  top: 300px;
}

.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
}

.progress-bar {
  width: 450px; /* Установите фиксированную ширину прогресс-бара */
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress {
  height: 100%;
  background-color: #3498db;
  transition: width 0.5s ease-in-out;
}

.animated-text h3 {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.animated-text:nth-child(1) h3 {
  animation-delay: 0s;
}

.animated-text:nth-child(2) h3 {
  animation-delay: 1s;
}

.animated-text:nth-child(3) h3 {
  animation-delay: 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
