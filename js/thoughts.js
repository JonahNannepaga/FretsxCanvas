/*JSON AJAX Art section*/
class Thoughts {

    constructor(jsonURL) {
        // this.fetchData = '';
        if (!jsonURL || jsonURL === '') {
            return new Error('URL not found');
        }
        this.jsonURL = jsonURL;
        this.jsonData = this.makeAJAXCall(this.jsonURL);
    }
    set jsonAssign(data) {
        this.fetchData = data;
    }
    get jsonAssign() {
        //console.log(this.fetchData);
        return this.fetchData;
    }

    makeAJAXCall(url) {
        //var data;
        // url = `http://127.0.0.1:5500/Muiart/` + url;
        // url = `https://jsoneditoronline.org/?id=25dc06a105aa4506aecd861f58c2a84d`;\

        url = `https://www.json-generator.com/api/json/get/clhMMWMwOa?indent=2`;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = xhr.response;
                var slider = document.getElementById("quote-comp");
                var fragment = document.createDocumentFragment();
                console.log(data);
                data.forEach(function (data) {
                    // var node = "<div><p>" + data.quote + "</div></p>";
                    var division = document.createElement('div');
                    var para = document.createElement('p');
                    para.textContent = data.quote;
                    division.appendChild(para);
                    fragment.appendChild(division);
                    $('#quote-comp').slick('slickAdd', division);
                });
                slider.appendChild(fragment);
            }
        }

        xhr.onerror = function () {
            console.log("ERROR in json");
        }
        xhr.send();
        //return data;
    }

}


new Thoughts('data/thoughts.json');