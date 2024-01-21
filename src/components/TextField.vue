<script setup lang="ts">
type TextFieldProps = {
  label: string;
};

defineProps<TextFieldProps>();
</script>

<template>
  <v-text-field :label="label" />
</template>