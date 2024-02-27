let data = [];

$(document).ready(function(){
   
    $("#submit").click(function(){
        let firstname = $("#firstname").val();
        let lastname = $("#lastname").val();
        let age = $("#age").val();
        let gender = $("input[name='gender']:checked").val();
        let hobbies = $("input[type='checkbox']:checked").val();
        let country = $("#country").val();
        let city = $("#city").val();
        let states = $("#states").val();
        let hidden = $("#hidden").val();

        let array = [firstname, lastname ,age ,gender ,hobbies, country, city, states];

        if(hidden != ""){
            data[hidden] = array;
        }else{
            data.push(array);
        }

        table(data);
        resetlist();
    });
});

function table(data){
    let tablelist = $("#tbody");
    
    let label = ``;
    
    data.forEach((item, index) => {
        label += `
        <tr>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
        <td>${item[3]}</td>
        <td>${item[4]}</td>
        <td>${item[5]}</td>
        <td>${item[6]}</td>
        <td>${item[7]}</td>
        <td>
        <button class="btn btn-primary" onclick="addlist(${index})">Edit</button>
        <button class="btn btn-danger" onclick="deletelist(${index})">Delete</button>
        </td>
        </tr>
        `;
    });
    tablelist.html(label)
}

function addlist(i){
    let item = data[i];
    $("#firstname").val(item[0]);
    $("#lastname").val(item[1]);
    $("#age").val(item[2]);

    if(item[3] == "male"){
        $('#male').prop('checked', true);
    }else if(item[3] == "female"){
        $('#female').prop('checked', true);
    }

    if(item[4] == "cricket"){
        $('#cricket').prop('checked', true);
    } else if(item[4] == "football"){
        $('#football').prop('checked', true);
    } else if(item[4] == "tennis"){
        $('#tennis').prop('checked', true);
    } else if(item[4] == "boxing"){
        $('#boxing').prop('checked', true);
    } else if(item[4] == "badminton"){
        $('#badminton').prop('checked', true);
    } 

    $("#country").val(item[5]);
    $("#city").val(item[6]);
    $("#states").val(item[7]);

    $("#hidden").val(i);
}

function deletelist(index){
    data.splice(index, 1);
    table(data);
    resetlist();
}

function resetlist(){
    $('#formdata').trigger("reset");
    $("#hidden").val("");
}