<template>
  <main class="h-[644px] md:h-[580px]">
    <h1 class="text-center mt-2 text-red-600">This is the counter page!</h1>

    <section class="w-full flex flex-col items-center">
      <p class="my-8 font-bold">Count Value: {{ count }}</p>

      <div class="w-full flex flex-col justify-evenly md:flex md:flex-row">
        <button
          class="py-4 px-8 m-2 bg-red-600 text-white rounded hover:bg-slate-100 hover:text-red-600"
          @click="increment"
        >
          Increment
        </button>
        <button
          class="py-4 px-8 m-2 bg-red-600 text-white rounded hover:bg-slate-100 hover:text-red-600"
          @click="decrement"
        >
          Decrement
        </button>
        <button
          class="py-4 px-8 m-2 bg-red-600 text-white rounded hover:bg-slate-100 hover:text-red-600"
          @click="reset"
        >
          Reset
        </button>

        <div class="flex justify-evenly items-center">
          <input class="h-14 outline-none border-2 rounded-sm" type="number" v-model.number="inputValue" />
          <button
            @click="setValue"
            class="py-4 px-8 m-2 bg-red-600 text-white rounded hover:bg-slate-100 hover:text-red-600"
          >
            Set Value
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import useCounter from "../hooks/use-Counter";
export default {
  name: "CounterComp",
  setup() {
    const { count, inputValue, increment, decrement, reset, setValue } = useCounter();

    return {
      count,
      inputValue,
      increment,
      decrement,
      reset,
      setValue,
    };
  },
};
</script>

<style scoped></style>
