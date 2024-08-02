var recordId;
let inputs;

function RemoveItem(target){
    var recordId = target.parents("tr").data("recordid");
    target.parents("tr").remove();  
    inputs = inputs.filter(function (c) {
        return c.recordId.toString() != recordId.toString()
    }); 
}

$(document).ready(function () {
    recordId = 0;
    inputs = [];
    $('#add-btn').click(function () {

        let studentName = $("#name").val();
        let age = $("#age").val();
        let subject = $("#subjects").val();


        recordId++;
        inputs.push({
            studentName: studentName,
            age: age,
            subject: subject,
            recordId: recordId,
        })

        document.getElementById("total-fee").innerHTML = subject * 100;
        $("#table-students tbody").append('<tr data-recordid='+recordId+'> <td class="counter"></td>><td>' + studentName + '</td><td>' + age + '</td><td>' + subject + ' </td>  <td><button style="border:none;background-color:white;" class="remove-item" onclick="RemoveItem($(this));"><i class="fa-solid fa-xmark"></i></button></td>  </tr>')
            
            
    });
    

});



