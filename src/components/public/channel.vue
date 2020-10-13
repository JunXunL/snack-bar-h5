<template>
  <div id="channel" class="flex-row">
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
    <div class="channel content-box flex-column">
      <i class="iconfont icon-shipin channel-img title size-f-t"></i>
      <span class="channel-title title size-30">食品</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#channel {
  width: 100%;
  margin: 20px 0 0 20px;
  justify-content: flex-start;
  .channel {
    width: 160px;
    height: 160px;
    overflow: hidden;
    border: 2px solid #abcdab;
    margin-bottom: 20px;
    margin-right: 14px;
    &:nth-child(5n) {
      margin-right: 0px;
    }
  }
}
</style>
