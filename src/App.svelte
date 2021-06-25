<script>
    let gramsOfFlour;
    let bigaCalculation;
    const {bigaFor} = require('./biga-calculator')

    const flourChanged = () => {
        bigaCalculation = bigaFor(gramsOfFlour)
    }
</script>

<main>
	<p>I keep having to jump around in <a href="https://www.youtube.com/watch?v=V2RCYjVhb9w">a video on how to make biga</a> and then figure out ingredients</p>
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
            <strong>Grams of water:</strong> {bigaCalculation.stepOne.gramsOfWater}<br/>
            <strong>Grams of yeast:</strong> {bigaCalculation.stepOne.gramsOfYeast}<br/>
            <strong>Grams of honey:</strong> {bigaCalculation.stepOne.gramsOfHoney}<br/>
        </div>
    {/if}
    {#if bigaCalculation && bigaCalculation.stepTwo}
        <div>
            <h1>Second Step</h1>
            <strong>Grams of water:</strong> {bigaCalculation.stepTwo.gramsOfWater}<br/>
            <strong>Grams of salt:</strong> {bigaCalculation.stepTwo.gramsOfSalt}<br/>
            <strong>Teaspoons of olive oil:</strong> {bigaCalculation.stepTwo.teaspoonsOfOliveOil}<br/>
        </div>
    {/if}
</main>

<style>
    label {
        display: inline-block;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
