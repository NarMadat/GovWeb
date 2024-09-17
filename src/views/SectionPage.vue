<template>
  <div class="px-4 md:px-8 lg:ml-40 py-4 mt-10">
    <h3 class="text-center md:text-left mb-12">Which sections do you want your <br>site to have?</h3>

    <details v-for="(section, index) in sections" :key="index" class="mt-6">
      <summary>
        <div class="flex-row inline-flex ml-1">
          <Checkbox v-model="section.allChecked" :label="section.title"/>
        </div>
      </summary>
      
      <div class="pl-4 md:pl-10">
        <div 
          v-for="post in section.posts"
          :key="post.id"
          class="flex items-center mt-3"
        >
          <Checkbox v-model="post.checked" />
          <label class="ml-2">{{ post.title }}</label>
        </div>
      </div>
    </details>

    <div class="mt-12 mb-12">
      <Button class="w-full md:w-28 h-10 px-4 py-2 bg-blue-100 border-blue-700 text-sm" variant="secondary" @click="router.push('/demo')">
        Հաջորդ 
        <AppIcon
          icon="chevron_right"
          size="24px"
          class="ml-2"
        />
      </Button>    
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Checkbox from '../components/AppCheckbox.vue'
import Button from '../components/AppButton.vue'
import AppIcon from '../components/AppIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sections = ref([
  {
    title: 'Ծառայություններ',
    allChecked: true,
    posts: [
      { id: 1, title: 'Ծառայություն 1', checked: true },
      { id: 2, title: 'Ծառայություն 2', checked: true },
      { id: 3, title: 'Ծառայություն 3', checked: true },
      { id: 4, title: 'Ծառայություն 4', checked: true },
      { id: 5, title: 'Ծառայություն 5', checked: true },
      { id: 6, title: 'Ծառայություն 6', checked: true }
    ]
  },

  {
    title: 'About US',
    allChecked: true,
    posts: [
      { id: 1, title: 'Ծառայության մասին', checked: true },
      { id: 2, title: 'Ծառայության պետ', checked: true },
      { id: 3, title: 'Կառուցվածք', checked: true },
      { id: 4, title: 'Կանոնադրություն', checked: true },
      { id: 5, title: 'Միջազգային համագործակցություն', checked: true },
      { id: 6, title: 'Ստորաբաժանումներ', checked: true }
    ]
  },

  {
    title: 'Նորություններ',
    allChecked: true,
    posts: [
      { id: 1, title: 'Նորություն 1', checked: true },
      { id: 2, title: 'Նորություն 2', checked: true },
      { id: 3, title: 'Նորություն 3', checked: true }
    ]
  },

  {
    title: 'Անձնակազմի կառավարում',
    allChecked: true,
    posts: [
      { id: 1, title: 'Մրցույթներ', checked: true },
      { id: 2, title: 'Մրցույթի արդյունքներ', checked: true },
      { id: 3, title: 'Թափուր հաստիքներ', checked: true },
      { id: 4, title: 'Փորձագետների հաշվետվություններ', checked: true },
      { id: 5, title: 'Փորձագետների հայտարարություններ', checked: true },
      { id: 6, title: 'Քաղաքացիական ծառայություն. Ինչպես դիմել', checked: true }
    ]
  },

  {
    title: 'Section',
    allChecked: true,
    posts: [
      { id: 1, title: 'Ֆինանսական', checked: true },
      { id: 2, title: 'Տեղեկատվության ազատություն', checked: true },
      { id: 3, title: 'Այլ', checked: true }
    ]
  },

  {
    title: 'Հետադարձ կապ',
    allChecked: true,
    posts: [
      { id: 1, title: 'Հետադարձ կապի տվյալներ', checked: true },
      { id: 2, title: 'Քաղաքացիների ընդունելություն', checked: true }
    ]
  }
]);

sections.value.forEach(section => {
  watch(() => section.allChecked, (newValue) => {
    section.posts.forEach(post => {
      post.checked = newValue;
    });
  });

  watch(
    () => section.posts.map(post => post.checked),
    (newValues) => {
      const anySelected = newValues.some(Boolean);
      const allSelected = newValues.every(Boolean);

      section.allChecked = allSelected;

      if (!section.allChecked) {
        section.allChecked = anySelected;
      }
    },
    { deep: true }
  );
});
</script>
