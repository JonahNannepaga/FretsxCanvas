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

        url = `https://www.json-generator.com/api/json/get/cgxjEKlMRK?indent=3`;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = xhr.response;
                console.log(data);
                var musiccard = $('#music-comp');
                var fragment = document.createDocumentFragment();
                
                data.forEach(function (data) {
                    
                var ulist = document.createElement('ul');
                var list1 = document.createElement('li');
                var list2 = document.createElement('li');
                var list3 = document.createElement('li');
                var list4 = document.createElement('li');
                
                var image1 = document.createElement('img');
                image1.setAttribute('src' , data.img);
                list1.appendChild(image1);
                ulist.appendChild(list1);

                var span2 = document.createElement('span');
                span2.textContent= data.name;
                list2.appendChild(span2);
                ulist.appendChild(list2);

                var span3 = document.createElement('span');
                span3.textContent= data.artist;
                list3.appendChild(span3);
                ulist.appendChild(list3);

                var link4 = document.createElement('a');
                link4.setAttribute('href', data.link);
                link4.textContent = 'Play';
                link4.setAttribute('target', '_blank');
                list4.appendChild(link4);
                ulist.appendChild(list4);
                
                
                fragment.appendChild(ulist);

                });


                musiccard.append(fragment);

            }

        }
        xhr.onerror = function () {
            console.log("ERROR in json");
        }
        xhr.send();
        //return data;
    }

}

new Music('data/music.json');