<template>
  <div class="container mx-auto bg-gray-900 py-4 px-6 md:py-6 md:px-12 mt-4 rounded-lg shadow-md">
    <form class="" novalidate>
      <h2 class="text-white text-4xl text-center mt-4 mb-12 font-semibold">Login</h2>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <Input :type="'text'" :place="'Nombre...'">Name</Input>
        <Input :type="'text'" :place="'Last Nombre...'">Last name</Input>
        <Input :type="'text'" :place="'Company...'">Company</Input>
        <Input :type="'phone'" :place="'Phone...'">Phone Number</Input>

        <Input :type="'text'" :place="'Website URL...'">Website URL</Input>
        <Input :type="'number'" :place="'1234...'">Unique visitors (per month)</Input>
        <Input :type="'email'" :place="'Email address...'">Email address</Input>
        <Input :type="'password'" :place="'Password...'">Password</Input>
        <Input :type="'check'" :place="'remember'">I agree with the terms and conditions</Input>
        <Input :type="'password'" :place="'Confirm password...'">Confirm password</Input>
        <button
          type="submit"
          @submit.prevent=""
          class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm col-span-2  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
    </div>

    </form>
  </div>
</template>

<script setup>
import Input from '@/components/Input/Input.vue'
</script>

<style lang="scss" scoped></style>
