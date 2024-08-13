<template>
    <div class="px-8 ml-40 py-4 mt-10">
        <div class="w-full ">
            <h3>Please wait</h3>
        </div>

        <div class=" load">
            <div class="loader-container " v-if="isLoading">
                <div class="loader"></div>
                <p>Loading...</p>
            </div>
            <div v-else>
                <p v-show="showDoneMessage">Done</p>
            </div>
        </div>
        <div class="text_load flex flex-row gap-16">
        <div>
            <div class="animated-text">
                <h3 class="text-xl flex items-center gap-1" style="animation-delay: 2s;">
                  <AppIcon
                    icon="check"
                    size="24px"
                    class="ml-2 text-button-default"
                  />
                  Build frame
                </h3>
            </div>
            
            <div class="animated-text">
                <h3 class="mt-2 text-xl flex items-center gap-1" style="animation-delay: 4s;">
                  <AppIcon
                    icon="check"
                    size="24px"
                    class="ml-2 text-button-default"
                  />
                  Adding sections
                </h3>
            </div>
            </div>

            <div>
            <div class="animated-text">
                <h3 class="text-xl flex items-center gap-1" style="animation-delay: 6s;">
                  <AppIcon
                    icon="check"
                    size="24px"
                    class="ml-2 text-button-default"
                  />
                  Run domain
                </h3>
            </div>
            <div class="animated-text">
                <h3 class="mt-2 text-xl flex items-center gap-1" style="animation-delay: 8s;">
                  <AppIcon
                    icon="check"
                    size="24px"
                    class="ml-2 text-button-default"
                  />
                  Adding content
                </h3>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isLoading = ref(true);
const showDoneMessage = ref(false);
const router = useRouter();
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    setTimeout(() => {
      router.push('/done'); 
    }, 0);
  }, 10000);
});
</script>

<style scoped>
.text_load {
    margin-top: 270px;
}

.load {
    position: absolute;
    margin-left: 200px;
    top: -8%;
}

.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.loader {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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