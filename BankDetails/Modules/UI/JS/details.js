
var txt="";
function test(ifsc) {
    ifsc= ifsc.trim();
        $.ajax({
            type: "GET",
            url: "https://ifsc.razorpay.com/" + ifsc,
            data: '',
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            success: function (msg) {
                txt =
                             "<tr class=\"border\">" +
                             "<td class=\"border\" >" + msg.BANK +  "</td>" + 
                             "<td class=\"border\">" + msg.IFSC + "</td>" +
                             "<td class=\"border\">" + msg.BRANCH + "</td>" +
                             "<td class=\"border\">" + msg.ADDRESS + "</td>" +
                             "<td class=\"border\">" + msg.CONTACT + "</td>" +
                             "<td class=\"border\">" + msg.CITY + "</td>" +
                             "<td class=\"border\">" + (msg.RTGS == "true" ? "True" : "No") + "</td>" +
                             "</tr>";

                $('body').addClass('newbg');
                $("#MainHeader").color="black";
                $("#MainHeader").addClass('NewHeader');
                $("#MainHeader").html("Your Details Are")
                $("#ContentDiv").find("#IFSCDiv").hide();
                $("#ContentDiv").find("#ErrorDiv").hide();
                $("#ContentDiv").find("#DetailsDiv").show();
                $("#Table").append(txt);
                $("#ContentDiv").find("#CloseDiv").show();

                $("#CloseDiv").click(function () {
                    $('body').removeClass("newbg");
                    $("#MainHeader").removeClass("NewHeader");
                    $("#MainHeader").html("BANK DETAILS");
                    $("#ContentDiv").find("#DetailsDiv").hide();
                    $("#ContentDiv").find("#IFSCDiv").show();
                    $("#SubmitDiv").prop('disabled', false);
                    $("#ContentDiv").find("#DetailsDiv").find('#Table td').remove();
                });

            },
            statusCode: {
                404: function () {
                    alert("Bank does not exists");
                    $("#SubmitDiv").prop('disabled', false);
                }
            }
        });
    }



