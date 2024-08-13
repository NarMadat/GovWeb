<template>
    <div class="px-4 md:px-8 md:ml-40 py-4 mt-10">
      <div class="w-full">
        <h3 class="text-center md:text-left">Give your E-mail</h3>
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="w-full md:w-72 mt-10 mx-auto md:mx-0">
            <div v-if="showError" class="text-[#CC0000] mb-2"><p>Error message</p></div>
            <div>
                <Input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  v-model="email"
                  :showError="showError"
                />
            </div>
        </div>
  
        <div class="mt-12 flex justify-center md:justify-start">
          <Button
            class="w-28 h-10 px-4 py-2 bg-blue-100 border-blue-700 text-sm"
            variant="secondary"
            type="submit"
            :disabled="!email || !isValidEmail"
            @click="validateAndSubmit"
          >
            Հաջորդ 
            <AppIcon
              icon="chevron_right"
              size="24px"
              class="ml-2"
            />
          </Button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import Input from '../components/AppInputField.vue';
  import Button from '../components/AppButton.vue';
  import AppIcon from '../components/AppIcon.vue';
  import { useRouter } from 'vue-router';


  const router = useRouter();
  const email = ref('');
  const errorMessage = ref('');
  const showError = ref(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidEmail = computed(() => validateEmail(email.value));
  
  const validateAndSubmit = () => {
    showError.value = !isValidEmail.value;
    if (isValidEmail.value) {
      router.push('/type');
    } else {
      errorMessage.value = '';
    }
  };
  
  const handleSubmit = () => {
    validateAndSubmit();
  };
  </script>