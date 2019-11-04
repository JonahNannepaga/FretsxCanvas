/*JSON AJAX Art section*/
class Music {

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
        url = `http://127.0.0.1:5500/Muiart/` + url;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = xhr.response;
                var list = $('#music-comp');
                console.log(data);
                var ulist = document.createElement('ul');
                var list1 = document.createElement('li');




            }

        }
        xhr.onerror = function () {
            console.log("ERROR in json");
        }
        xhr.send();
        //return data;
    }

}

new Music('../data/music.json');