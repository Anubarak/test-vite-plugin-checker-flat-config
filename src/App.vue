<script setup
        lang="ts"
>

const code = '{{ a }}';
</script>

<template>
    html code is <code>{{ code }}</code> this should show a warning but it does not
    {{ a }}
</template>

<style scoped>

</style>