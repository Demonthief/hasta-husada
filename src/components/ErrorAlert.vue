<script setup>
import Message from 'primevue/message';

const props = defineProps({
    message: {
        type: String
    }
})
</script>

<template>
    <Message severity="error">{{ props.message }}</Message>
</template>