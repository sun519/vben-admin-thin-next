<template>
    <div class="welcome">
        <div>测试</div>
        <House />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import House from '../house/index.vue';
    export default defineComponent({
        // name: 'Welcome',
        components: { House },
    });
</script>
<style lang="less" scoped>
    .welcome {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>
