!(function($){
	// regular js

	// jquery
	$(function(){

		// added to fix the ticket 73921
		// this need to be removed once the release from BET is successfully done and respective change done from backend

		$('#genq').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017"></a>' );    
			}
		);
	
		$('#angus').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%201%20Angus"></a>' );    
			}
		);
	
		$('#joshua').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%202%20Joshua"></a>' );    
			}
		);
	
		$('#mark').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%203%20Mark"></a>' );    
			}
		);
	
		$('#michael').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%204%20Michael"></a>' );    
			}
		);
	
		$('#lena').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%205%20Lena"></a>' );    
			}
		);
	
		$('#sam').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%206%20Sam"></a>' );    
			}
		);
	
		$('#lean').hover(function() {
			$(this).wrap( '<a href="mailto:office@agworkforce.com.au?subject=Hot%20Property%20Enquiry%2006.12.2017%20-%207%20Leanne"></a>' );    
			}
		);


		//change the sequence of quick links on job page
		$( "#ctl00_ContentPlaceHolder1_ucJobPreview_hLinkProfession" ).after( $("#ctl00_ContentPlaceHolder1_ucJobPreview_hLinkJob" ));
		$(".job-detailtop-title").prepend($( "#ctl00_ContentPlaceHolder1_ucJobPreview_hLinkProfession" ));
		
		//  if(window.location.href.indexOf("/member/register.aspx") > -1) 
		// {
		// 	$(".buttonHolder input[type=submit]").attr("value","Register & Complete Application");
		// }
		// bootstrap classes
		$("#dynamic-container, #content-container, #job-dynamic-container")
			.wrap("<div class='container-fluid'></div>")
			.addClass("row");
		$("#content-container.newDash").removeClass("container");

		if ( $.trim( $("#dynamic-side-left-container a:visible, #side-left a:visible, #job-side-column a:visible").text() ).length )
		{
			$("#dynamic-side-left-container, #side-left").addClass("col-md-4 hidden-sm hidden-xs pull-right");
			$("#dynamic-content, #content-container #content").addClass("col-md-8 col-sm-12 col-xs-12 pull-left");

			$("#job-side-column").addClass("col-lg-4 hidden-md hidden-sm hidden-xs pull-left");
			$("#job-dynamic-container #content").addClass("col-lg-8 col-md-12 col-sm-12 col-xs-12 pull-right");
		}
		else
		{
			$("#dynamic-side-left-container, #side-left").hide();
			$("#dynamic-content, #content").addClass("col-xs-12");
		}
		$("#side-right, #dynamic-side-right-container").hide();

		// make header sticky.
		var headerHeight = $("#r20_header-container").height();
		$("body").addClass("r20_sticky-header");
		$("body").css("padding-top", headerHeight);

		// skip link
		$("#skip-link").attr("href", "#" + $("#dynamic-content, #content").attr("id"));

		// remove empty li's and ul's on the system pages. 
		$(".links-2 li:empty").remove();
		$(".links-2 ul:empty").remove();
		
		// add active class to links.
		$("li a[href='" + window.location.pathname.toLowerCase() + "']").parent().addClass("active");
		$("li.active li.active").parent().closest("li.active").removeClass("active");
				
		// add nbsp;
		$("#side-drop-menu > li > ul > li > a").each(function(){
			var linkText = $(this).text();
			linkText = linkText.replace(" (", "&nbsp;(");
			$(this).html(linkText);
		});

		// move news rss feed to bottom of news index.
		$(".newsIndex").append( $(".newsIndex .search-options") ); 
		// move date on new page.
		$(".news-individual-container").each(function(){
			$(this).children(".news-excerpt").children("h3").after( $(this).children(".news-date") );
		});
		
		// generate actions button 
		$(".job-navbtns").convertButtons({
			buttonTitle: "Actions&hellip;", 
			title: "Please choose&hellip;", 
			links: ".job-navbtns a"
		});
		
		// generate filters button 
		$(".job-navbtns").convertFilters({
			buttonTitle: "Filters&hellip;", 
			filteredTitle: "Applied Filters", 
			title: "Please choose&hellip;", 
			filtered: ".search-query p", 
			list: "ul#side-drop-menu", 
			excludeFromList: "#AdvancedSearchFilter_PnlCompany"
		});

		// copy header social media links to footer and contact page.
		var contactSocialMedia = $(".r20_social-media").clone()
		var footerSocialMedia = $(".r20_social-media a").clone();
		$("#r20_contact-us-social-media").prepend( contactSocialMedia );
		
		footerSocialMedia.children("i").remove();
		$("#r20_footer-social-media").append("<span>Follow&nbsp;Us&nbsp;on </span>");
		$("#r20_footer-social-media").append( footerSocialMedia );
		$("#r20_footer-social-media").append("<span> for&nbsp;Market&nbsp;Updates.</span>");

		// mobile menu
		$("#r20_mobile-navigation").click(function(e){
			e.preventDefault();
			$("#r20_navigation > ul").toggleClass("active");
		});
		
		// home banner
		$(".r20_slider").cycle({
			timeout: 5000, 
			slides: "> div", 
			next: ".cycle-next", 
			prev: ".cycle-prev"
		});

		// inner banners
		// write inner banner image if it doesn't already contain an image
		if ( $("#r20_inner-banner-container:visible").length  && !$("#r20_inner-banner-container img").length )
		{
			var parentIndex;
			$("#r20_navigation a").each(function(){
				if ( location.pathname.toLowerCase() == $(this).attr("href") )
				{
					parentIndex = $(this).closest("#r20_navigation > ul > li").index();
				}
				if ( parentIndex == -1)
				{
					parentIndex = null;
				}
			});
			
			$("#r20_inner-banner-container").prepend( $("<img src='/media/ag-workforce/images/banners/inner-" + (parentIndex || "3") + ".jpg' alt='AG Workforce' />") );
		}
		
		// home latest jobs
		$("#a_home-latest-jobs ul").each(function(){
			var dataURL = $(this).attr("data-url");
			$(this).includeFeed({
				baseSettings: { limit: 12, rssURL: [dataURL || "/job/rss.aspx?search=1&addlocation=1"] }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-pubDate'>[[pubDateTemplate]]</span><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span></div></li>"
				},
				complete: function(){
					// remove duplicate jobs from rss widgets
					// var jobsArray2 = {}
					// $(this).find("li").each(function(){
					// 	var jobTitle = $(this).find(".rss-item-title a").text();
					// 	if (jobsArray2[jobTitle])
					// 	{
					// 		$(this).remove();
					// 	}
					// 	else
					// 	{
					// 		jobsArray2[jobTitle] = true;
					// 	}
					// });
					// put two .rss-item's in one li
					var myJobs = $(this).children();
					var myNewUL = $("<ul></ul>");
					myNewUL.append("<li></li>");
					myJobs.each(function(i){
						if ( i > 1 && (0 == i % 3) )
						// odd job
						{
							myNewUL.append("<li></li>");
						}
						myNewUL.children("li:last").append( $(this).clone().html() );
					});
					$(this).html( myNewUL.html() );
					if ($(this).children().length > 1){ 
						$(this).jcarousel({
							auto: 5, 
							scroll: 1, 
							wrap: "circular", 
							vertical: true
						});
					}
				}
			});
		});
		//add "job search" button on dashboard 
		if(window.location.href.indexOf("member/default.aspx") > -1) {
       		$("a[href='/member/createjobalert.aspx']").after("&nbsp;&nbsp;&nbsp;<a class='mini-new-buttons' href='/advancedsearch.aspx'>Job Search</a>");
    	}


		// Latest Jobs widget
		$(".r20_latest-jobs ul").each(function(){
			var dataURL = $(this).attr("data-url");
			$(this).includeFeed({
				baseSettings: { limit: 12, rssURL: [dataURL || "/job/rss.aspx?addlocation=1"] }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-pubDate'>[[pubDateTemplate]]</span><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span><span class='rss-item-link'><a href='{{link}}'>Read more&gt;</a></span></div></li>"
				},
				complete: function(){
					// remove duplicate jobs from rss widgets
					// var jobsArray2 = {}
					// $(this).find("li").each(function(){
					// 	var jobTitle = $(this).find(".rss-item-title a").text();
					// 	if (jobsArray2[jobTitle])
					// 	{
					// 		$(this).remove();
					// 	}
					// 	else
					// 	{
					// 		jobsArray2[jobTitle] = true;
					// 	}
					// });
					// put location in a span of its own after pubdate.
					$(this).children().each(function(){
						var myLocation = $("<span class='rss-item-location'>" + $(this).find(".xmlLocation").text() + "</span>");
						$(this).find(".xmlLocation").remove();
						$(this).find(".rss-item-title").after(myLocation);
					});
					if ($(this).children().length > 1){ 
						$(this).jcarousel({
							auto: 5, 
							scroll: 1, 
							wrap: "circular", 
							vertical: true
						});
					}
				}
			});
		});
		
		
		// Latest News widget
		$(".r20_latest-news ul").each(function(){
			var dataURL = $(this).attr("data-url");
			$(this).includeFeed({
				baseSettings: { rssURL: [dataURL || "/NewsRSS.aspx"] }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-pubDate'>[[pubDateTemplate]]</span><span class='rss-item-description'>{{description}}</span><span class='rss-item-link'><a href='{{link}}'>Read more&gt;</a></span></div></li>"
				},
				complete: function(){
					if ($(this).children().length > 1){ 
						$(this).jcarousel({
							auto: 5, 
							scroll: 1, 
							wrap: "circular", 
							vertical: true
						});
					}
				}
			});
		});

		// Testimonials widget
		//$(".r20_testimonials ul").not( $("#r20_home-content .r20_testimonials ul") ).each(function(){
//			var dataURL = $(this).attr("data-url");
//			$(this).includeFeed({
//				baseSettings: { rssURL: [dataURL || "/NewsRSS.aspx"] }, 
//				templates: { 
//					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span></div><span class='rss-item-link'><a target='_blank' href='{{link}}'>Read more&gt;</a></span></li>"
//				},
//				complete: function(){
//					if ($(this).children().length > 1){ 
//						$(this).jcarousel({
//							auto: 5, 
//							scroll: 1, 
//							wrap: "circular", 
//							vertical: true
//						});
//					}
//				}
//			});
//		});
		
		
		
		$(".r20_testimonials ul").not( $("#r20_home-content .r20_testimonials ul") ).each(function(){
			var dataURL = $(this).attr("data-url");
			$(this).includeFeed({
				baseSettings: { rssURL: [dataURL] }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span></div><span class='rss-item-link'><a target='_blank' href='{{link}}'>Read more&gt;</a></span></li>"
				},
				complete: function(){
					if ($(this).children().length > 1){ 
						$(this).jcarousel({
							auto: 5, 
							scroll: 1, 
							wrap: "circular", 
							vertical: true
						});
					}
				}
			});
		});
		
		
		
		
		// home testimonials
		$("#r20_home-content .r20_testimonials ul").each(function(){
			//var dataURL1 = "/NewsRSS.aspx?category=jobseeker-testimonials";
			var dataURL2 = "/newsrss.aspx?categories=599,611";
			//var newUL1 = $("<ul></ul>");
			var newUL2 = $("<ul></ul>");
			/*newUL1.includeFeed({
				baseSettings: { rssURL: [dataURL1] }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span></div><span class='rss-item-link'><a target='_blank' href='{{link}}'>Read more&gt;</a></span></li>"
				},
				complete: function(){
					
				}
			});*/
			newUL2.includeFeed({
				baseSettings: { rssURL: [dataURL2], limit:60 }, 
				templates: { 
					itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-item-description'>{{description}}</span></div><span class='rss-item-link'><a target='_blank' href='{{link}}'>Read more&gt;</a></span></li>"
				},
				complete: function(){
					$("#r20_home-content .r20_testimonials ul").html(newUL2.html());
					if ($("#r20_home-content .r20_testimonials ul").children().length > 1){ 
						$("#r20_home-content .r20_testimonials ul").jcarousel({
							auto: 5, 
							scroll: 1, 
							wrap: "circular", 
							vertical: true
						});
					}
				}
			});
		});

		// if user logged in, change register links to dashboard.
		if ( $(".user-loggedIn").length )
		{
			$("a[href='/member/register.aspx']").text("My Dashboard");
			$("a[href='/member/register.aspx']").attr("href", "/member/default.aspx");

			$("a[href='/member/login.aspx']").text("Logout");
			$("a[href='/member/login.aspx']").attr("href", "/logout.aspx");

			$("a[href='/member/register.aspx#submit-cv']").attr("href", "/submit-cv");
			$("a[href='/member/register.aspx#submit-photo']").attr("href", "/submit-photo");

			$("#memberProfileCV").after("<li><a href='https://application.agworkforce.com.au/register/' target='_blank'>Jobseeker Apply</a></li>");
		}

		// expandable tab
		$(".r20_tab-heading a").click(function(e){
			if ( !$(this).attr("href") )
			{
				e.preventDefault();
				$(this).parent().parent().toggleClass("active");
				$(this).parent().parent().next(".r20_tab-content").toggleClass("active");
			}
		});
		// if tab is in hash, click it automatically. 
		if ( location.hash.toLowerCase() && $(location.hash.toLowerCase()).length )
		{
			$(location.hash.toLowerCase()).find("a").click();
			scrollToDiv(location.hash.toLowerCase());
		}

		// add iframe url for a map
		function loadMap(iframeObject)
		{
			// if the iframe has no src or a blank src, and it has a data-src attribute
			if ( !(iframeObject.attr("src") && iframeObject.attr("src").length) && iframeObject.attr("data-url") )
			{
				iframeObject.attr("src", iframeObject.attr("data-url"));
			}
		}
		// scroll to a map
		function scrollToDiv(divID)
		{
			$("html, body").animate({
				scrollTop: $(divID).offset().top - ( $(".r20_sticky-header #r20_header-container").height() || 0 ) - 20
			}, 300);
		}
		// if a location hash is on the url, add active to the div.
		if ( location.hash && $(location.hash + ".r20_map").length )
		{
			$(location.hash + ".r20_map").addClass("active");
		}
		else
		{
			// otherwise, just make the first map active.
			$(".r20_map:first").addClass("active");
		}
		loadMap($(".r20_map.active iframe"));
		// contact page maps on click
		$(".r20_contact-map-link, .footer-location a").click(function(e){
			var targetMap = $($(this).attr("href"));
			if ( targetMap.length )
			{
				e.preventDefault();
				loadMap(targetMap.children("iframe"));
				scrollToDiv(targetMap);
				$(".r20_map").not(targetMap).removeClass("active");
				targetMap.addClass("active");
			}
		});

		// on homepage, make a copy of the call to action buttons and place them above the search widget.
		$(".r20_call-to-action-buttons").clone().addClass("a_copy").prependTo("#r20_home-banner-search-container");

		// remove duplicate jobs from search results.
		// var jobsArray = {}
		// $(".job-holder").each(function(){
		// 	var jobTitle = $(this).find(".job-toplink a").text();
		// 	if (jobsArray[jobTitle])
		// 	{
		// 		$(this).remove();
		// 	}
		// 	else
		// 	{
		// 		jobsArray[jobTitle] = true;
		// 	}
		// });

		// login page - change text to include email.
		$("#memberlogin-errorMessage").next("li").children("label").html('Username / Email Address <span class="form-required">*</span>');

		

	});
	
	$( document ).ready(function() {
    if(window.location.pathname.indexOf('/member/default.aspx') > -1) {
       $('#memberProfileLinks li a[href*="//www.agworkforce.net/regform.aspx"]').attr('href','https://application.agworkforce.com.au/register/');
                
       $("#content").prepend("<a href='/member/profile.aspx' class='dashboard_btn btn_4'>CV Builder</a>");
	   $("#content").prepend("<a href='/member/createjobalert.aspx' class='dashboard_btn btn_4'>Create Job Alert</a>");
       $("#content").prepend("<a href='/advancedsearch.aspx?search=1' class='dashboard_btn btn_search_jobs'>Search Jobs</a>");
       $("#content").prepend("<a href='/submit-photo' class='dashboard_btn btn_3'>Submit Photo</a>");
       $("#content").prepend("<a href='/submit-cv' class='dashboard_btn btn_2'>Submit CV</a>");
       $("#content").prepend("<span class='submit-application-dashboard'>* You must complete \"SUBMIT APPLICATION\" so we can assess your skills.</span><a href='https://application.agworkforce.com.au/register/' class='dashboard_btn btn_1' target='_blank'>Submit Application</a>");
       $("#memberProfileLinks").insertBefore(".submit-application-dashboard");
       $("#memberProfileLinks").removeClass("pull-right navbar-right").addClass("navbar-left");
   }
    $("#profileRow1 .highlight + span").text(" seeking");
});
	
	
	
})(jQuery);