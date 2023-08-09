var url = "https://api.waifu.pics/"

var title_id;
var title_name;

document.addEventListener('DOMContentLoaded', function() {
    title_id = document.querySelector('.title-id');
    title_name = document.querySelector('.title-name');

    title_id.addEventListener('change', function() {
        const selected_value = this.value;
    
        title_name.innerHTML = ``;
    
        if (selected_value === 'sfw') {
            title_name.innerHTML = `
            <option value="waifu">Waifu</option>
            <option value="neko">Neko</option>
            <option value="shinobu">Shinobu</option>
            <option value="megumin">Megumin</option>
            <option value="cuddle">Cuddle</option>
            <option value="hug">Hug</option>
            <option value="awoo">Awoo</option>
            <option value="kiss">Kiss</option>
            <option value="lick">Lick</option>
            <option value="blush">Blush</option>
            <option value="happy">Happy</option>
            <option value="cringe">Cringe</option>
            <option value="poke">Poke</option>`;
        }
        else {
            title_name.innerHTML = `
            <option value="waifu">Waifu</option>
            <option value="neko">Neko</option>
            <option value="trap">Trap</option>
            <option value="blowjob">Blowjob</option>`;
        }
    });
});

function searchNSFW() {
    var xhr = new XMLHttpRequest()
    var table = document.getElementById("nsfw-container")
    var response
    console.log(url + title_id.value + '/' + title_name.value)
    xhr.responseType = 'json'
    xhr.open('GET', url + title_id.value + '/' + title_name.value)
    xhr.onload = function() {
        if (xhr.status == 200) {
            response = xhr.response
            console.log(response.url)
            var newRow
            if (table.rows.length === 0 || table.rows[table.rows.length-1].cells.length >= 4) {
                newRow =  table.insertRow()
            } else {
                newRow = table.rows[table.rows.length-1]
            }
            var newCell = newRow.insertCell()
            var img = document.createElement('img')
            img.src = response.url
            newCell.appendChild(img)
            // var imgElement = document.createElement("img")
            // imgElement.src = response.url
            // document.body.appendChild(imgElement)
        } else {
            console.error("Error of request:", xhr.status)
        }
    }
    xhr.send()
}

