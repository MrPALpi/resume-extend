import { ref, onMounted, onUnmounted } from "vue";

export default function winSize() {
  const windowSize = ref(window.innerWidth);
  const resize = () => {windowSize.value = window.innerWidth;};
  onMounted(() => {
    console.log("MOUNT");
    window.addEventListener("resize", () => {
      resize();
    });
  });
  onUnmounted(() => {
    console.log("UNMOUNT");
    window.removeEventListener("resize", () => {
      resize();
    });
  });
  return { windowSize };
}

// export default windowSize;
