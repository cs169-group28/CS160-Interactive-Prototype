// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
	var $modal = $('#dialog'),

    	$modal_container = $('overlay');

  $('a[data-remote]').live('ajax:beforeSend', function(e, xhr, settings){
    xhr.setRequestHeader('accept', '*/*;q=0.5, text/html, ' + settings.accepts.html);
  });

  $('a[data-remote]').live('ajax:success', function(xhr, data, status){
    $modal
      .html(data)
      .css('top', $(window).scrollTop() + 40)
      .show();
    $modal_container.show();
  });



	$("#addob").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			// Adding an objective

			if ($("#addob").val()){
				$("#objectives").append("<li>"+$("#addob").val()+"</li>")
				$("#addob").val("");
			}
			return false;		
		}
	});
	$("#addre").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			// Adding a resource
			
			if ($("#addre").val()){
				$("#resources").append("<li>"+$("#addre").val()+"</li>")
				$("#addre").val("");
			}
			return false;		
		}
	});
	$("#addbi").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			$("#addbb").focus();
		}
	});
	$("#addbb").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			$("#addbs").focus();
		}
	});
	$("#addbs").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			// Adding a resource
			
			if ($("#addbi").val() && $("#addbb").val() && $("#addbs").val()){
				var itemspan = $("<span></span>").text($("#addbi").val());
				var budgetspan = $("<span></span>").text($("#addbb").val());
				var spentspan = $("<span></span>").text($("#addbs").val());
				
				$("#budget-item-wrapper").append(itemspan);
				$("#budget-wrapper").append(budgetspan);
				$("#spent-wrapper").append(spentspan);
				
				$("#addbi").val("");
				$("#addbb").val(0);
				$("#addbs").val(0);
				$("#addbi").focus();
			}
			return false;		
		}
	});
	
	$('ul.tabs').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and it's associated content
		var $active, $content, $links = $(this).find('a');
		
		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active.attr('href'));
		
		// Hide the remaining content
		$links.not($active).each(function () {
			$($(this).attr('href')).hide();
		});
		
		// Bind the click event handler
		$(this).on('click', 'a', function(e){
			// Make the old tab inactive.
			$active.removeClass('active');
			$content.hide();
			
			// Update the variables with the new link and content
			$active = $(this);
			$content = $($(this).attr('href'));
			
			// Make the tab active.
			$active.addClass('active');
			$content.show();
			
			// Prevent the anchor's default click action
			e.preventDefault();
		});
	});
	$("#btn").click(function (e) {
		ShowDialog();
		e.preventDefault();
	});
	$("#btnClose").click(function (e) {
		HideDialog();
		e.preventDefault();
	});
	$("#btnSubmit").click(function (e) {
		HideDialog();
		e.preventDefault();
	});
	$(".btn2").click(function(e) {
		ShowDialog2();
		e.preventDefault();
	});
	$("#btnClose2").click(function (e) {
		HideDialog();
		e.preventDefault();
	});
	$("#btnSubmit2").click(function (e) {
		HideDialog();
		e.preventDefault();
	});
});

function ShowDialog() {
	$("#overlay").show();
	$("#dialog").fadeIn(300);
	$("#overlay").unbind("click");
}

function HideDialog() {
	$("#overlay").hide();
	$("#dialog").fadeOut(300);
	$("#dialog2").fadeOut(300);
}

function ShowDialog2() {
	$("#overlay").show();
	$("#dialog2").fadeIn(300);
	$("#overlay").unbind("click");
}