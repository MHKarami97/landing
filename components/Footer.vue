<script setup lang="ts">
const links = [{
  label: 'منابع',
  children: [{
    label: 'راهنمایی'
  }, {
    label: 'سوالات'
  }, {
    label: 'روش'
  }, {
    label: 'تغییرات'
  }]
}, {
  label: 'ویژگی',
  children: [{
    label: 'شرکتها'
  }, {
    label: 'پورتال'
  }, {
    label: 'جذب'
  }, {
    label: 'اسپانسر'
  }]
}, {
  label: 'شرکت',
  children: [{
    label: 'درباره'
  }, {
    label: 'قیمت'
  }, {
    label: 'وبلاگ'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'عضو شدید!',
      description: 'شما در خبرنامه عضو شدید'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup label="برای دریافت آخرین اخبار و تخفیفها در خبرنامه عضو شوید" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" placeholder="ایمیل شما" :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl" autocomplete="off" class="max-w-sm">
                <template #trailing>
                  <UButton type="submit" size="xs" :label="loading ? 'در حال عضویت' : 'عضویت'" :loading="loading"/>
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
         تمام حقوق محفوظ است Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm"/>

      <UButton to="https://mhkarami97.ir" target="_blank" icon="i-simple-icons-github" aria-label="Mhkarami97" color="gray" variant="ghost"/>
    </template>
  </UFooter>
</template>
