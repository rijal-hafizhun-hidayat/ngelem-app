<script setup>
const router = useRouter();
const showingNavigationDropdown = ref(false);

const login = () => {
  return router.push({
    name: "login",
  });
};

const signup = () => {
  return router.push({
    name: "register",
  });
};
</script>
<template>
  <div class="h-screen">
    <nav class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex items-center">
              <ApplicationLogo class="block fill-current text-gray-800" />
            </div>
          </div>

          <div class="hidden sm:flex space-x-4">
            <div class="my-4">
              <SecondaryButton @click="login()">Login</SecondaryButton>
            </div>
            <div class="my-4">
              <PrimaryButton @click="signup()">Sign Up</PrimaryButton>
            </div>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <button
              @click="showingNavigationDropdown = !showingNavigationDropdown"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  :class="{
                    hidden: showingNavigationDropdown,
                    'inline-flex': !showingNavigationDropdown,
                  }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  :class="{
                    hidden: !showingNavigationDropdown,
                    'inline-flex': showingNavigationDropdown,
                  }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        :class="{
          block: showingNavigationDropdown,
          hidden: !showingNavigationDropdown,
        }"
        class="sm:hidden"
      >
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink
            to="/"
            activeClass="border-indigo-500"
            exactActiveClass="border-indigo-900"
            class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
            >Home</NuxtLink
          >
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200">
          <div class="mt-3 space-y-1">
            <div class="pl-3 pr-4 py-2">
              <PrimaryButtonOutline @click="login()"
                >Login</PrimaryButtonOutline
              >
            </div>
            <div class="pl-3 pr-4 py-4">
              <PrimaryButton @click="signup()">Sign Up</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header> -->

    <main>
      <slot />
    </main>
  </div>
</template>
