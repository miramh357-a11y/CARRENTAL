$(document).ready(function () {
    // إظهار وإخفاء تفاصيل السيارات
    $(".showDetails").change(function () {
        var targetId = $(this).val();
        if ($(this).is(":checked")) {
            $("#" + targetId).fadeIn();
        } else {
            $("#" + targetId).fadeOut();
        }
    });

    // إظهار نموذج الحجز عند الضغط على متابعة
    $("#continueBtn").click(function () {
        var selectedCars = $("input[name='selectCar']:checked").length;
        if (selectedCars === 0) {
            alert("يرجى اختيار سيارة واحدة على الأقل للمتابعة.");
        } else {
            $("#bookingForm").slideDown();
            $('html, body').animate({
                scrollTop: $("#bookingForm").offset().top
            }, 500);
        }
    });
});

// دالة التحقق من صحة المدخلات
function validateForm() {
    var nationalId = document.getElementById("nationalId").value.trim();
    var startDate = document.getElementById("startDate").value.trim();
    var endDate = document.getElementById("endDate").value.trim();

    var nationalIdRegex = /^[0-9]{11}$/;
    if (!nationalIdRegex.test(nationalId)) {
        alert("الرقم الوطني يجب أن يتكون من 11 رقماً فقط.");
        return false;
    }

    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
        alert("يرجى إدخال التاريخ بالصيغة الصحيحة yyyy-mm-dd.");
        return false;
    }

    alert("تم إرسال طلب الحجز بنجاح!");
    return true;
}