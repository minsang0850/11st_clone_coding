<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
export default {
  components: {
    LNB, //지역등록
    RNB,
    TheHeader,
    Billboard,
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>
