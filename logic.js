$(document).ready(function () {

    $("#searchBtn").on("click", event => {
        event.preventDefault();
        $("#results > tbody").empty();

        let searchTermData = $("#searchTerm").val();
        let numRecordsData = $("#numRec").val();
        let startYearData = $("#startYear").val()
        let endYearData = $("#endYear").val()
        createURL(searchTermData, startYearData, endYearData);
        $("#searchTerm").val("");

        $("#startYear").val("");
        $("#endYear").val("");

        

        console.log(`searching ${searchTermData} ${numRecordsData} ${startYearData} ${endYearData}`);


    });
    $("#clearBtn").on("click", event => {
        event.preventDefault();
        $("#results > tbody").empty();
    });

    const createURL = (searchTermData, beginDate, endDate) => {
        let baseURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermData}`;
        let apiKey = `&api-key=VpZUli6fofAqZfGkGvU4883LHQZShlgE`;

        if (beginDate) {
            baseURL + `&begin_date=${beginDate}0101`;

        }

        if (endDate) {
            baseURL + `&end_date=${endDate}1231`
        }

        let fullURL = baseURL + apiKey;






        console.log(fullURL);
        getArticles(fullURL);
    }








    const getArticles = (URL) => {
        $.ajax({
            url: URL,
            method: "GET",
        }).then(function (res) {
            let data = res.response.docs
            console.log(res)

            renderResults(data);

        })
    }

    let renderResults = (data) => {
        let resultsToReturn = $("#numRec").val();
        console.log(resultsToReturn)


        for (let i = 0; i < resultsToReturn; i++) {
            let title = data[i].headline.main;
            let byline = data[i].snippet;

            let newTR = $("<tr>");
            let newH3 = $("<h3>").text(title);
            let newP = $("<p>").text(byline);

            newTR.append(newH3, newP);
            newTR.addClass("table-primary");
            $("#results > tbody").append(newTR);
        }
    }

})