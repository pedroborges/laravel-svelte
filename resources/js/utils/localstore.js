import { onDestroy } from 'svelte'

function withLocalStorage(store) {
    return function(key) {
        const localData = JSON.parse(localStorage.getItem(key))

        if (localData) {
            store.set(localData)
        }

        const unsubscribe = store.subscribe(
            state => localStorage.setItem(key, JSON.stringify(state))
        )

        onDestroy(unsubscribe)

        store.remove = () => localStorage.removeItem(key)

        return store
    }
}

export default withLocalStorage
