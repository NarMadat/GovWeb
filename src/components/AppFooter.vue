<template>
  <AppViewport
    col
    parentElement="footer"
    class="py-10 bg-text-200 border-t border-gray-100 z-10"
  >
    <div class="w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-16 px-8 md:px-36">
      <section>
        <div class="flex gap-2 items-center text-text-800 mb-6">
          <AppIcon
            icon="how_to_reg"
            size="24px"
            class="text-button-default"
          />

          <div class="flex">
            <h3 class="text-base font-normal text-text-700">Կայքը համապատասխանում է <a href="https://standards.hightech.gov.am/" class="text-base text-blue-900">ՀՀ հանրային ծառայությունների թվայնացման սկզբունքներին
              <AppIcon
              icon="open_in_new"
              size="19px"
              class="text-blue-900 mt-1 ml-1"
            />
            </a></h3>
            

            <p>:</p>
          </div>
        </div>

        <div class="text-text-800 font-normal mr-0 lg:mr-96">
          {{ copyrightText }}
        </div>
      </section>

      <div class="flex justify-center lg:justify-start items-center">
        <img
          class="max-w-32 h-[90px]"
          loading="lazy"
          src="/footer_logo.svg"
          alt="Հայաստանի Հանրապետության զինանշան"
        />
      </div>
    </div>
  </AppViewport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { templateInterpolation } from '../../utils/interpolation'
import AppLink from '../components/AppLink.vue'
import AppIcon from '../components/AppIcon.vue'

const copyrightText = computed(() => {
  const year = new Date().getFullYear();
  const text = '© {year} Հայաստանի տեղեկատվական համակարգերի գործակալություն';
  return templateInterpolation(text, { year });
});
</script>
