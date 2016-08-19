var maximumProperties = $(':checkbox').length + 1;
var totalProperties   = 0;

$(function(){
    $('#bulkSlider').attr('type','range').attr('min','1').attr('max',maximumProperties).on('change', function(){
        var currentSliderVal = $('#bulkSlider').val();
        totalProperties = currentSliderVal;
        $('#TotalProperties').prop('value',currentSliderVal);
    });

    $('#TotalProperties').val(totalProperties).blur(function(){
        var currentSliderVal = $(this).val();
        $('#bulkSlider').prop('value', currentSliderVal );
    });
});

$('#bulkSlider').on('change', function(){
    var currentSliderVal = $('#bulkSlider').val();
    totalProperties = currentSliderVal;
    $('#TotalProperties').prop('value',currentSliderVal);
});

/* Toggle checkbox */
$('#selectAllSel').on('change', function () {
    if (this.checked){
            $(':checkbox').slice(0,totalProperties).each(function () {
                $(this).prop('checked', true);
            });
    }else{
            $(':checkbox').each(function () {
                $(':checkbox').prop('checked', false);
            });
    }
});

$('#reassign').on('click', function () {
        var amt = totalProperties;
        var dpVal = $('#selectMasterPlanningPartner').val();
        $('.currentAssignedLabel').slice(0,amt).each(function () {
            $(this).html(dpVal);
    });

});
$('span.glyphicon.glyphicon-trash').on('click',function () {
   $(this).closest('tr').remove();
});