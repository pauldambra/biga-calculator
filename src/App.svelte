<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
        @apply font-mono leading-loose;
    }

    label {
        @apply inline-block;
    }

    main {
        @apply container px-4;
    }

    ul {
        @apply list-none;
    }

    h1 {
        @apply uppercase text-2xl mb-2 mt-3;
    }

    input {
        @apply border-black border-2 rounded;
    }

    a {
        @apply underline font-medium;
    }

</style>

<svelte:head>
    <base href="$BASE_URL$">
</svelte:head>

<script>
    let gramsOfFlour;
    let bigaCalculation;
    const {bigaFor} = require('./biga-calculator')

    const flourChanged = () => {
        bigaCalculation = bigaFor(gramsOfFlour)
    }
</script>

<main>
    <h1>Biga Calculator</h1>
    <p>I keep having to jump around in <a href="https://www.youtube.com/watch?v=V2RCYjVhb9w">a video on how to make
        biga</a> and then figure out ingredients</p>
    <p>Obviously I need to automate this!</p>
    <p>Add the grams of flour you want to use and get the ingredients for each step</p>

    <label for="flour">
        <strong>Grams of flour</strong>
    </label>
    <input
            type=number
            bind:value={gramsOfFlour}
            min=0
            id="flour"
            on:input={flourChanged}
    >

    {#if bigaCalculation && bigaCalculation.stepOne}
        <div>
            <h1>First Step</h1>
            <ul>
                <li>Add <strong>{bigaCalculation.startingFlour} grams of flour</strong> to the container</li>
                <li>Add <strong>{bigaCalculation.stepOne.gramsOfYeast} grams of yeast</strong></li>
                <li>Shake to mix</li>
                <li>mix the <strong>{bigaCalculation.stepOne.gramsOfHoney} grams of honey</strong> into the <strong>{bigaCalculation.stepOne.gramsOfWater} grams of water</strong></li>
                <li>add the water to the flour, shaking to mix</li>
                <li>keep shaking until it forms straccetti</li>
                <li>leave at room temperature for 2 to 5 hours and then in the fridge for up to 2 days</li>
            </ul>
        </div>
    {/if}
    {#if bigaCalculation && bigaCalculation.stepTwo}
        <div>
            <h1>Second Step</h1>
            <ul>
                <li>take out of the fridge</li>
                <li>leave at room temperature for an hour</li>
                <li>add <strong>{bigaCalculation.stepTwo.gramsOfWater} grams of water</strong></li>
                <li>add <strong>{bigaCalculation.stepTwo.gramsOfSalt} grams of salt</strong></li>
                <li>add <strong>{bigaCalculation.stepTwo.teaspoonsOfOliveOil} teaspoons of extra virgin olive oil</strong></li>
                <li>knead and the rest for 1 hour</li>
                <li>form balls and rest for 1 hours</li>
            </ul>
        </div>
    {/if}
</main>
