<template>
    <button class='sm:w-6/12 rounded-lg shadow-xl font-medium text-white text-xl'>
        {{ label }}
    </button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    }
  }
};
</script>