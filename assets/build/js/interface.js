$(document).ready(function() {
	$('.table-wrap tr').hover(function(){
		$(this).addClass('tr-hover');
	},function(){
		$(this).removeClass('tr-hover');
	});


	const phone__ind = document.getElementById('phone__ind');
	//Phone-mask
	if (typeof (phone__ind) != 'undefined' && phone__ind != null) {
		var phoneMask = IMask(
			document.getElementById('phone__ind'), {
			mask: '+{375} (00) 000-00-00',
			lazy: false,
		}
		);
	}



	//INPUT-FILE-CONTENT
	if ('#upload-content'.length>0) {
		var dropZone = document.getElementById('upload-content');
		if (dropZone) {
			dropZone.addEventListener('dragover', handleDragOver, false);
			dropZone.addEventListener('drop', handleFileSelect, false);
			
			document.getElementById('files').addEventListener('change', handleFileSelect, false);
		}
		$("body").on("click", ".js-file-del", function (e) {
			e.preventDefault();
			$('.file-upload-sample').hide();
		});
	}


	if ($("#conf-select-count").length > 0) {
		$("#conf-select-count").slider({
			animate: true,
			range: "min",
			value: 2000,
			min: 0,
			max: 6000,
			step: 1,
			slide: function (event, ui) {
				$("#conf-select-input").val(ui.value);
			}
		})
		$("#conf-select-input").keyup(function () {
			$("#conf-select-count").slider("value", $(this).val())
		});
	};
	if ($("#conf-select-count2").length > 0) {
		$("#conf-select-count2").slider({
			animate: true,
			range: "min",
			value: 2200,
			min: 0,
			max: 6000,
			step: 1,
			slide: function (event, ui) {
				$("#conf-select-input2").val(ui.value);
			}
		})
		$("#conf-select-input2").keyup(function () {
			$("#conf-select-count2").slider("value", $(this).val())
		});
	};
	if ($("#conf-select-count3").length > 0) {
		$("#conf-select-count3").slider({
			animate: true,
			range: "min",
			value: 2.21,
			min: 2,
			max: 3,
			step: 0.01,
			slide: function (event, ui) {
				$("#conf-select-input3").val(ui.value);
			}
		})
		$("#conf-select-input3").keyup(function () {
			$("#conf-select-count3").slider("value", $(this).val())
		});
	};


	$('#color-htmlselect1').ddslick({
		//selectText: "Выберите цвет",  
	});
	$('#color-htmlselect2').ddslick({
		//selectText: "Выберите цвет",  
	});
	$('#color-htmlselect3').ddslick({
		//selectText: "Выберите цвет",  
	});


	if($('.country').length>0){
		$(".js-country-toggle").on("click",function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).next('.country-view-list').slideToggle(200);
		});
	
		$(".js-country-view-item").on("click",function(e) {
			e.preventDefault();
			var toggledIconAct = $(this).find('.country-view-icon img').attr('src');
			var toggledTxtAct = $(this).find('.country-view-txt').text();
			$('.country-toggle').find('.country-toggle__icon').html('<img src="' + toggledIconAct + '" alt=""/>');
			$('.country-toggle').find('.country-toggle__txt').html(toggledTxtAct);

			$('.country-toggle').removeClass('active');
			$('.country-view-list').slideUp(200);
		});
		$(document).click( function(e){
			var div = $( ".country" );
			if ( !div.is(e.target)
				&& div.has(e.target).length === 0 ) { 
				$('.country-toggle').removeClass('active');
				$('.country-view-list').slideUp(200);
			}
		});
	}
	
	

});



// functions
function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.dataTransfer.files; // FileList object.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<div class="file-info"><span>', escape(f.name), '</span><a href="#" class="file-del js-file-del">Удалить</a>');
	}
	document.getElementById('list_content').innerHTML = output.join('');
	$('.file-upload-sample').show();
}

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}

//checkbox
$(function() {
	$(".js-checkbox-view-toggle").on("click",function() {
		if(this.checked){
			$(this).parents('.conf-view__item').addClass('active')
		} else{
			$(this).parents('.conf-view__item').removeClass('active')
		}
	  	//$(".answer").toggle(this.checked);
	});
});