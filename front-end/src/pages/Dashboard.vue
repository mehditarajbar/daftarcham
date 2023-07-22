<script setup>

import Boxes from "../components/Dashboard/DetalistBox.vue"
import TodayProgram from "../components/Dashboard/TodayProgram.vue"

import ChatBox from "../components/Dashboard/ChatBox.vue"
// Initialization for ES Users

</script>

<template>
      <Boxes />

      <div class="grid grid-rows-2 grid-flow-col gap-4 pb-3">
            <div class="row-start-1 col-span-5">
                  <TodayProgram />
            </div>
            <div class="row-start-1 col-span-1">
                  <ChatBox/>
            </div>

      </div>
</template>

<style></style>