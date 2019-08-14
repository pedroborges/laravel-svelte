<script>
    import { InertiaLink } from '@inertiajs/inertia-svelte'

    export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="max-w-md mx-auto">
    <nav class="py-6 mb-6 border-b">
        <InertiaLink class="mr-4" href="/">Home</InertiaLink>
        <InertiaLink class="mr-4" href="/about">About</InertiaLink>
        <InertiaLink class="mr-4" href="/contact">Contact</InertiaLink>
    </nav>

    <slot />
</div>
