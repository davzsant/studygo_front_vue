<template>
    <div class="steps">
        <StepOne :step="step" @twoStep="needTwoSteps"/>
        <StepTwo :step="step"/>
    </div>
    
</template>
  
<script lang="ts" setup>
    import StepOne from '@/components/Login/StepOne.vue';
    import StepTwo from '@/components/Login/StepTwo.vue';
    import { ref } from 'vue';

    const step = ref<number>(1)

    function needTwoSteps()
    {
        step.value = 2
    }
</script>   