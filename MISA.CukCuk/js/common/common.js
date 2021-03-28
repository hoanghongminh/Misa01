$(document).ready(function(){
    var tableJs = document.getElementById('list2');
    var tableJq = $('#list2');
    var title = $('.header-title');
    
    title.click(function(){
        $(this).hide();
        alert('hello');
    });

    loadData();
    function loadData(){
    $.ajax({
        url: "http://api.manhnv.net/api/customers",
        method: "GET"
    }).done(function(response){
        $('#tbl-customers tbody').empty();
        for (var i = 0; i < response.length; i++){
            var trHtml = $(`<tr class= "firstline">
                <td>${response[i].CustomerCode}</td>
                <td>${response[i].FullName}</td>
                <td>${response[i].Gender}</td>
                <td>${response[i].DateOfBirth}</td>
                <td>${response[i].PhoneNumber}</td>
                <td>${response[i].Email == null ? "" : response[i].Email}</td>
                <td>${response[i].Address}</td>
                <td>${response[i].CustomerGroupId}</td>
            </tr>`); 
        trHtml.data("id", response[i].CustomerId);
        
        $('#tbl-customers > tbody:last-child').append(trHtml);
    }
    }).fail(function (res){
            //request fail
    });
}
});
//save data
function saveData(){
    var customer = getCustomerInform();
    if(ValidityState(customer)){
        $.ajax({
            url: "http://api.manhnv.net/api/customers",
            method: "POST",
            data: JSON.stringify(customer),
            contentType: "application/json"
        }).done(function(response){
            //thông báo người dùng
            alert("them moi khach hang thanh cong");
            //dong dialog
            document.getElementById('customer-dialog').closest();
            //load data
            loadData();
        }).fail(function(res){
            //request fail
        });
    }
 }
// == null ? "" : formatDate(response[i].DateOfBirth)
$(document).ready(function () {
    loadData();
})
function loadData(){
    //lay du lieu ve
    $.ajax({
        url: "https://api.manhnv.net/api/employees",
        method: "GET",
    }).done(function(res) { 
        var data = res;
    }).fail(function(res) {

    })
}