<script>
    import { contactRules } from '../validation/contact'
    import { Inertia, remember } from 'inertia-svelte'
    import { validate } from 'formee'
    import Layout from '@/Shared/Layout.svelte'

    const initialFormData = {
        firstname: '',
        lastname: '',
        age: null,
    }

    let errors = {}
    let form = remember({ ...initialFormData })
    const resetForm = () => $form = { ...initialFormData }

    function sendMessage({ target }) {
        errors = validate(target, contactRules)

        if (target.isValid) {
            Inertia.post('/contact', $form).then(resetForm)
        }
    }
</script>

<Layout title="Contact">
    <h1>Contact</h1>

    <form class="mt-6" on:submit|preventDefault={sendMessage}>
        <div>
            <label for="firstname" class="block">First Name:</label>
            <input id="firstname" name="firstname" class="block mt-2 border" bind:value={$form.firstname}>
            {#if errors.firstname}
            <div class="mt-2 text-red text-sm">{errors.firstname}</div>
            {/if}
        </div>
        <div>
            <label for="lastname" class="block">Last Name:</label>
            <input id="lastname" name="lastname" class="block mt-2 border" bind:value={$form.lastname}>
            {#if errors.lastname}
            <div class="mt-2 text-red text-sm">{errors.lastname}</div>
            {/if}
        </div>
        <div>
            <label for="age" class="block">Age:</label>
            <input id="age" name="age" type="number" class="block mt-2 border" bind:value={$form.age}>
            {#if errors.age}
            <div class="mt-2 text-red text-sm">{errors.age}</div>
            {/if}
        </div>
        <button class="mt-6 bg-indigo-600 text-white py-2 px-6 rounded" type="submit">Submit</button>
    </form>
</Layout>
