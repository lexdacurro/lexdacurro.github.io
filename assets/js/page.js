	/* LE FUNCTION THAT CONTROLS ALL THE COLOR CHANGES 
		NOTE NO SAME COLOR EXIST IN EVERY INSTANCE.
		
		Code Written by: Alexe Dacurro.
		Email me at lexdacs7@gmail[dot]com for any questions.
	*/
	
	
	/* le necessary functions */

	function randomizeTheEffects(){
		var max =3;
		var min = 1;
		var randomizeEffect = Math.floor(Math.random()*(max-min+1)+min);
		var direction = [];
		if (randomizeEffect == 1){	
			direction = ["left","right"];
		}else if(randomizeEffect == 2){
			direction = ["right","down"];
		}else{
			direction = ["up","left"];
		}
		return direction;
	}
	
	
	
	function unloadGrids(){
		if (randomizeTheEffects() == 1){
			$(".clickable").text("Unloading Grids...");
			setTimeout($(".clickable").empty(),1500);
			setTimeout($("#Title a").animate({ "left": "-=35%" }, "slow" ),1800);
			$(".first").hide("slide", { direction: "left"  }, 2000 );
			$(".second").hide("slide", { direction: "down"  }, 2000 );
			$(".third").hide("slide", { direction: "up"  }, 2000 );
			$(".fourth").hide("slide", { direction: "right"  }, 2000, function(){
				$(this).hide("slide",{direction:"top"},2000);
				setTimeout(window.location.href="/portfolio/",2500);
			});	
		}else if (randomizeTheEffects() == 2){
			$(".clickable").text("Unloading Grids...");
			setTimeout($(".clickable").empty(),1500);
			setTimeout($("#Title a").animate({ "left": "-=35%" }, "slow" ),1800);
			$(".first").hide("slide", { direction: "right"  }, 2000 );
			$(".second").hide("slide", { direction: "up"  }, 2000 );
			$(".third").hide("slide", { direction: "down"  }, 2000 );
			$(".fourth").hide("slide", { direction: "right"  }, 2000, function(){
				$(this).hide("slide",{direction:"top"},2000);
				setTimeout(window.location.href="/portfolio/",2500);
			});	
		}else{
			$(".clickable").text("Unloading Grids...");
			setTimeout($(".clickable").empty(),1500);
			setTimeout($("#Title a").animate({ "left": "-=35%" }, "slow" ),1800);
			$(".first").hide("slide", { direction: "left"  }, 2000 );
			$(".second").hide("slide", { direction: "down"  }, 2000 );
			$(".third").hide("slide", { direction: "up"  }, 2000 );
			$(".fourth").hide("slide", { direction: "right"  }, 2000, function(){
				$(this).hide("slide",{direction:"top"},2000);
				setTimeout(window.location.href="/portfolio/",2500);
			});				
		}
	}
	function showChange(){
		
		
		
		var width2 = $(window).width();
		
		if (width2 >= 414 && width2 < 1000) {
		//	alert();
			$("#Title a").animate({ "left": "+=35%" }, "fast" );
		}else{
			$("#Title a").animate({ "left": "+=33%" }, "fast" );
		}
		$(".clickable").show();
		$(".clickable-about").show();
	}
	
	/** convert HSV to RGB **/
	
	
	/** Generate Flat colors Only using color Theory to generate HSV **/
	var golden_ratio_conjugate = 0.618033988749895;
	var HSL = {
		generateH: function(num){
			var h = Math.random();
			h = h + golden_ratio_conjugate;
			h %=1;
			return h;
		},
		generateS: function(num){
			var s = Math.random();
			s = s + golden_ratio_conjugate;
			s %=1;
			return s;
		},
		generateV: function(num){
			var v = Math.random();
			v = v + golden_ratio_conjugate;
			v %=1;
			return v;
		},
		hsv_to_RGB: function(h, s, v) {
			var r, g, b, i, f, p, q, t;
			i = Math.floor(h * 6);
			f = h * 6 - i;
			p = v * (1 - s);
			q = v * (1 - f * s);
			t = v * (1 - (1 - f) * s);
			switch (i % 6) {
				case 0: 
					r = v, g = t, b = p; 
				break;
				case 1:
					r = q, g = v, b = p; 
				break;
				case 2:
					r = p, g = v, b = t; 
				break;
				case 3:
					r = p, g = q, b = v;
				break;
				case 4:
					r = t, g = p, b = v;
				break;
				case 5: 
					r = v, g = p, b = q;
				break;
			}
			return [Math.floor(r * 255),Math.floor(g * 255),Math.floor(b * 255)];
		},
		checkColors: function (RGB){
			// TBA
			
		}
	};
	/** END **/
	var GridPanels = {
		stopTheFuckingLoading: function(){
			$("#loading").empty();
		},
		setBackground: function(RGB,i){
			var elementClassName;
			switch (i){
				case 0:
				elementClassName = "first";
				break;
				
				case 1:
				elementClassName = "second";
				break;
				
				case 2:
				elementClassName = "third";
				break;
				
				case 3:
				elementClassName = "fourth";
				break;

			}
			$("."+elementClassName).css("background-color",RGB);
			
			var ColorInstensity = Math.round(((parseInt(RGB[0]) * 299) + (parseInt(RGB[1]) * 587) + (parseInt(RGB[2]) * 114)) /1000);
			if (ColorInstensity > 125){
				$("."+elementClassName).css("color","#000");
			}else{
				$("."+elementClassName).css("color","#FFFF");
			}
		},
		showGrids: function(){
		
			$("#loading").append("<img src = 'assets/img/infinity.gif'></img>");
			var direction1 = randomizeTheEffects();
			
			setTimeout(	function(){
					GridPanels.stopTheFuckingLoading();	
					$(".container").show(); 
					var panels =  $('.container').children(); // get the panels1 and panels2 dynamically
					$("#Title a").animate({ "left": "+=33%" }, "fast" );
					for(var $i = 0; $i<panels.length; ++$i){
						
						var childName = panels[$i].className;	
						$("."+childName).show();
						
						var grid1 = panels[$i].children[0].className;
						var grid2 = panels[$i].children[1].className;
						if (direction1[$i] == "up" || direction1[$i] == "down"){
							direction1 = randomizeTheEffects();
						}
						$("."+grid1).show("slide", { direction: direction1[$i]  }, 2500 );
						$("."+grid2).show("slide", { direction: direction1[$i] }, 2500 );
						
					}	
					$(".clickable").show();
					
			},2000);
		
		},
		unloadGrids: function(){
				var panels =  $('.container').children(); // get the panels1 and panels2 dynamically
				var direction2 = randomizeTheEffects();
					for(var $i = 0; $i<panels.length; ++$i){
						
						var childName = panels[$i].className;	
						$("."+childName).show();
						
						var grid1 = panels[$i].children[0].className;
						var grid2 = panels[$i].children[1].className;
						if (direction2[$i] == "up" || direction2[$i] == "down"){
							direction2 = randomizeTheEffects();
						}
						$("."+grid1).hide("slide", { direction: direction2[$i]  }, 2500 );
						$("."+grid2).hide("slide", { direction: direction2[$i] }, 2500 );
						setTimeout(function(){window.location.href="/portfolio/"},2500);
					}	
		}
		
	};
	

	var page = {
		AboutUs: function(inheritColor){
			
			var direction = randomizeTheEffects();
			for ($i=0;$i<1;++$i){
				console.log(direction[$i]);
				if (direction[$i] == "up"){
				
					$('.container-about').show("slide", { direction: "up"  }, 2000 );
					
				}else if (direction[$i] == "right"){
					$('.container-about').show({
						right: '-=190'}, {
					//   easing: function (){ $(this+" #page").css ("background-color",les},
						duration: 5000
					//complete: alert('end ani')
					});
				}else{
					$('.container-about').show({
						left: '-=190'}, {
					//   easing: function (){ $(this+" #page").css ("background-color",les},
						duration: 5000
					//complete: alert('end ani')
					});
				}
			}
			setTimeout(function(){
				$(".clickable-about").show();
			},2000);
			
			$('.container-about').css("background-color",inheritColor);
			$(".container div").css ("background-color",inheritColor);
			$("#profile-pic").css("background-color",inheritColor);
			var color = $("#page").css("background-color");	
			$("#profile-pic").css("width","180px");
			$("#profile-pic").css("height","180px");
			$(".clickable-about").click(function(){
				var H = HSL.generateH();
				var S = HSL.generateS(); 
				var V = HSL.generateV();
				var randomColor = HSL.hsv_to_RGB(H,S,V);
				$('.container-about').css("background-color",randomColor);
				$(".container div").css ("background-color",randomColor);
				$("#profile-pic").css("background-color",randomColor);
			});
		
		}
	};
	
function keyBoardShortcut () {
	var k = 1;
	 // LE KEYS //
	 $("body").keydown(function(e){		
		$(".first").css("opacity","0.75");
			if (e.keyCode == 37){ //left
				if (k !=1){
					k -=1;
				}else{
					k = 4;
				}
			}else if (e.keyCode == 39){ //right
				if (k >3 ) {
					k =1;
				}else{
					k+=1;
				}
			}
			else if (e.keyCode == 40){ // down
				if (k > 2){
					k-=2;
				}else if (k ==1 || k == 2){
					k+=2;
				}
			}else if(e.keyCode == 38){ //up
				if (k > 2){
					k-=2;
				}else if (k ==1 || k == 2){
					k+=2;
				}
			}else if (e.keyCode == 13) {
				/** capture k **/
				if (k ==1){
					page.AboutUs();
					p = $(".first").css('background-color');
					showNewPage(p);
								
				}else if (k==2){
					alert("redirect me to Portfolio")
				}
				else if (k==3){
					alert("redirect me to Proyekto")
				}
				else if (k==4){
					alert("redirect me to Contact Me")
				}
			}
			else{
				k = 1;
			}
			
			if (k == 1){
				$(".first").css("opacity","0.75");
				$(".second").css("opacity","1");
				$(".third").css("opacity","1");
				$(".fourth").css("opacity","1");
			}else if (k==2){
				$(".first").css("opacity","1");
				$(".second").css("opacity","0.75");
				$(".third").css("opacity","1");
				$(".fourth").css("opacity","1");
			}else if (k==3){
				$(".first").css("opacity","1");
				$(".second").css("opacity","1");
				$(".third").css("opacity","0.75")
				$(".fourth").css("opacity","1");
			}else if (k==4){
				$(".first").css("opacity","1");
				$(".second").css("opacity","1");
				$(".third").css("opacity","1");
				$(".fourth").css("opacity","0.75");
			}
	});
}
$(document).ready(function(){
	//DEFAULT SETTINGS
	$(".container").focus();
	$(".clickable").hide();
	$(".clickable-about").hide();
	$(".container").hide();
	$(".container-about").hide();
	var inheritColor;	
	var href = document.location.href;
	var pageName = href.substr(href.lastIndexOf('/') + 1);
	var panels =  $('.container').children(); // get the panels1 and panels2 dynamically
	keyBoardShortcut();
	for(var $i = 0; $i<panels.length; ++$i){
			var childName = panels[$i].className;
			$("."+childName).hide();
			var grid1 = panels[$i].children[0].className;
			var grid2 = panels[$i].children[1].className;
			$("."+grid1).hide();
			$("."+grid2).hide();
				
	}
	
	for (var i=0; i<4; ++i){
		var H = HSL.generateH();
		var S = HSL.generateS(); 
		var V = HSL.generateV();
		var randomColor = HSL.hsv_to_RGB(H,S,V);
		//SOON -- >HSL.checkColors(randomColor);
		GridPanels.setBackground(randomColor,i);
	}
	
	if (pageName != "about.html" || pageName != "projects.html" || pageName != "contact_me.html" ){
		GridPanels.showGrids();	
	}
	$(".clickable").click(function(evt){
		GridPanels.unloadGrids();
	});	

	$(".first").click(function(evt){
		inheritColor = $(this).css("background-color");
		window.location.href = "about.html"
		$.cookie("background-color",inheritColor);
	});
	inheritColor = $.cookie("background-color");
	if (pageName == "about.html"){
		page.AboutUs(inheritColor);
	}
	
});