$(document).ready(function () {

    console.log("hi bishhhh")
    // SUBMIT - Click event
    //grab text field values
    //store in variables
    //create URL --- call function
    //Run ajax function
    //empty out the fields

    $("#searchBtn").on("click", event => {
        event.preventDefault();
        let searchTermData = $("#searchTerm").val();
        let numRecordsData = $("#numRec").val();
        let startYearData = $("#startYear").val()
        let endYearData = $("#endYear").val()


        createURL(searchTermData)

        console.log(`searching ${searchTermData} ${numRecordsData} ${startYearData} ${endYearData}`);


    });

    const createURL = (searchTermData) => {
        let URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermData}&api-key=VpZUli6fofAqZfGkGvU4883LHQZShlgE`
        console.log(URL)
    }



    //CLEAR RESULTS- Click event
    //Empty out the results div


    //AJAX function
    //GET
    //THEN
    //Take json and return to front end
    //display to DOM
})