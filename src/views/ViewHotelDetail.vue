<script setup></script>
<template>
    <div class="dslkf">Hotel Details</div>
    <p class="dslkf">{{ $route.params.id }}</p>
</template>
<style lang="scss" scoped>
.dslkf {
    font-size: large;
    @include default-text;
}
</style>