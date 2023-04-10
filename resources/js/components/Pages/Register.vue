<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="name" class="form-label">Your name</label>
                        <input type="text" name="name" id="name" class="form-input" placeholder="John Doe" required="">
                    </div>
                    <div>
                        <label for="email" class="form-label">Your email</label>
                        <input type="email" name="email" id="email" class="form-input" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="form-input" required="">
                    </div>
                    <div>
                        <label for="confirm-password" class="form-label">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="form-input" required="">
                    </div>
                    <button type="submit" class="form-button">Create an account</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>