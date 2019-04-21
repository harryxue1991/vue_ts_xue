<template>
    <div>
        <div>哈哈哈</div>
        <div>{{data}}</div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator' 
@Component
export default class Test extends Vue {
    data = '哈哈哈2'
}

</script>
