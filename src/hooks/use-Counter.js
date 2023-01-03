import { ref } from "vue";

const useCounter = () => {
  const count = ref(0);
  const inputValue = ref(null);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = 0;
  };

  const setValue = () => {
    if (!inputValue.value) {
      return;
    }
    count.value = inputValue.value;
    inputValue.value = "";
  };

  return {
    count,
    inputValue,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useCounter;
