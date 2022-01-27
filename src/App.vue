<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import Direct from '~/components/Direct'

export default {
  components: {
    LNB, //지역등록
    RNB,
    TheHeader,
    Billboard,
    Direct,
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>
