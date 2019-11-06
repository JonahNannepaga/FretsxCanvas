/*JSON AJAX Art section*/
class Art {

    constructor(jsonURL) {
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

        url = `http://www.json-generator.com/api/json/get/cdHdwbiiPS?indent=3`;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = xhr.response;
                var card = $('#art-comp');
                var fragment = document.createDocumentFragment();
                console.log(data); //to test incoming JSON data
                data.forEach(function (data) {
                    var division = document.createElement('div');
                    division.setAttribute("class", "art-card");
                    var head = document.createElement('h3');
                    head.textContent = data.name;
                    var image = document.createElement('img');
                    image.setAttribute("src", data.img);
                    var tail = document.createElement('p');
                    tail.textContent = data.des;
                    division.appendChild(head);
                    division.appendChild(image);
                    division.appendChild(tail);

                    fragment.appendChild(division);
                    // console.log("fragment", division);
                });
                card.append(fragment);
            }

        }
        xhr.onerror = function () {
            console.log("ERROR in json");
        }
        xhr.send();
        //return data;
    }

}

new Art('../data/art.json');