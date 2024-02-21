<script setup lang="ts">
useHead({
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  link: [
    {rel: 'icon', href: '/favicon.ico'}
  ],
  htmlAttrs: {
    lang: 'fa'
  }
})

useSeoMeta({
  ogSiteName: 'school',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div dir="rtl">
    <Header/>

    <UMain>
      <NuxtPage/>
    </UMain>

    <Footer/>
  </div>
</template>
