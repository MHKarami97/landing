<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'ویژگی‌ها',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'قیمت',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
}, {
  label: 'نظرات',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials')
}, {
  label: 'راهنما',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      مدرسه <UBadge label="آزمون" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="ورود" color="white" variant="ghost" trailing-icon="i-heroicons-arrow-left-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="ورود" color="white" block class="mb-3" />
      <UButton label="شروع" block />
    </template>
  </UHeader>
</template>
