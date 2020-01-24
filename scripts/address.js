/*creating a variable to hold the queryselector 
that is grabbing the id of sectionList
*/
const container = document.querySelector("#addressList")

/*grabbing the id of saveEntry which is on the save button
and attaching an event listener to listen
for a click. once it hears the click it runs the function
that grabs the value of the text boxes and puts them into 
the personName and personAddress variables which 
then are used to be referenced later in the string
interpolation to poulate the DOM
*/
document.querySelector("#saveEntry").addEventListener("click", event => {
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `
})