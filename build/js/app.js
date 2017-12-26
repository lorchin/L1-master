/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	/**
	 * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
	 */
	function hasParent( e, p ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el != p) {
			el = el.parentNode||false;
		}
		return (el!==false);
	};
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * SelectFx function
	 */
	function SelectFx( el, options ) {	
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * SelectFx options
	 */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab : true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder : true,
		// callback when changing the value
		onChange : function( val ) { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	SelectFx.prototype._init = function() {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector( 'option[selected]' );
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
		
		// total options
		this.selOptsCount = this.selOpts.length;
		
		// current index
		this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
		
		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

		// init events
		this._initEvents();
	}

	/**
	 * creates the structure for the select element
	 */
	SelectFx.prototype._createSelectEl = function() {
		var self = this, options = '', createOptionHTML = function(el) {
			var optclass = '', classes = '', link = '';

			if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}
			// extra classes
			if( el.getAttribute( 'data-class' ) ) {
				classes += el.getAttribute( 'data-class' );
			}
			// link options
			if( el.getAttribute( 'data-link' ) ) {
				link = 'data-link=' + el.getAttribute( 'data-link' );
			}

			if( classes !== '' ) {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call( this.el.children ).forEach( function(el) {
			if( el.disabled ) { return; }

			var tag = el.tagName.toLowerCase();

			if( tag === 'option' ) {
				options += createOptionHTML(el);
			}
			else if( tag === 'optgroup' ) {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call( el.children ).forEach( function(opt) {
					options += createOptionHTML(opt);
				} );
				options += '</ul></li>';
			}
		} );

		var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
		this.selEl = document.createElement( 'div' );
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild( this.selEl );
		this.selEl.appendChild( this.el );
	}

	/**
	 * initialize the events
	 */
	SelectFx.prototype._initEvents = function() {
		var self = this;

		// open/close select
		this.selPlaceholder.addEventListener( 'click', function() {
			self._toggleSelect();
		} );

		// clicking the options
		this.selOpts.forEach( function(opt, idx) {
			opt.addEventListener( 'click', function() {
				self.current = idx;
				self._changeOption();
				// close select elem
				self._toggleSelect();
			} );
		} );

		// close the select element if the target it´s not the select element or one of its descendants..
		document.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
				self._toggleSelect();
			}
		} );

		// keyboard navigation events
		this.selEl.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				// up key
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				// down key
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				// space key
				case 32:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				// enter key
				case 13:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				// esc key
				case 27:
					ev.preventDefault();
					if( self._isOpen() ) {
						self._toggleSelect();
					}
					break;
			}
		} );
	}

	/**
	 * navigate with up/dpwn keys
	 */
	SelectFx.prototype._navigateOpts = function(dir) {
		if( !this._isOpen() ) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
		
		if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
			// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			// remove focus class if any..
			this._removeFocus();
			// add class focus - track which option we are navigating
			classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
		}
	}

	/**
	 * open/close select
	 * when opened show the default placeholder if any
	 */
	SelectFx.prototype._toggleSelect = function() {
		// remove focus class if any..
		this._removeFocus();
		
		if( this._isOpen() ) {
			if( this.current !== -1 ) {
				// update placeholder text
				this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
			}
			classie.remove( this.selEl, 'cs-active' );
		}
		else {
			if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
				// everytime we open we wanna see the default placeholder text
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add( this.selEl, 'cs-active' );
		}
	}

	/**
	 * change option - the new value is set
	 */
	SelectFx.prototype._changeOption = function() {
		// if pre selected current (if we navigate with the keyboard)...
		if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		// current option
		var opt = this.selOpts[ this.current ];

		// update current selected value
		this.selPlaceholder.textContent = opt.textContent;
		
		// change native select element´s value
		this.el.value = opt.getAttribute( 'data-value' );

		// remove class cs-selected from old selected option and add it to current selected option
		var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
		if( oldOpt ) {
			classie.remove( oldOpt, 'cs-selected' );
		}
		classie.add( opt, 'cs-selected' );

		// if there´s a link defined
		if( opt.getAttribute( 'data-link' ) ) {
			// open in new tab?
			if( this.options.newTab ) {
				window.open( opt.getAttribute( 'data-link' ), '_blank' );
			}
			else {
				window.location = opt.getAttribute( 'data-link' );
			}
		}

		// callback
		this.options.onChange( this.el.value );
	}

	/**
	 * returns true if select element is opened
	 */
	SelectFx.prototype._isOpen = function(opt) {
		return classie.has( this.selEl, 'cs-active' );
	}

	/**
	 * removes the focus class from the option
	 */
	SelectFx.prototype._removeFocus = function(opt) {
		var focusEl = this.selEl.querySelector( 'li.cs-focus' )
		if( focusEl ) {
			classie.remove( focusEl, 'cs-focus' );
		}
	}

	/**
	 * add to global namespace
	 */
	window.SelectFx = SelectFx;

} )( window );


var AddItem_1 = document.getElementById('add_item_1');
var DelItem_1 = document.getElementById('del_item_1');
var RemoveItem_1 = document.getElementById('remove_1');
var inputField_1 = document.getElementById('count_item_1');
var priceField_1 = document.getElementById('price_item_1');

var AddItem_2 = document.getElementById('add_item_2');
var DelItem_2 = document.getElementById('del_item_2');
var RemoveItem_2 = document.getElementById('remove_2');
var inputField_2 = document.getElementById('count_item_2');
var priceField_2 = document.getElementById('price_item_2');

var AddItem_3 = document.getElementById('add_item_3');
var DelItem_3 = document.getElementById('del_item_3');
var RemoveItem_3 = document.getElementById('remove_3');
var inputField_3 = document.getElementById('count_item_3');
var priceField_3 = document.getElementById('price_item_3');

var total = document.getElementById('total_cart');
var subtotal = document.getElementById('subtotal_cart');

if (AddItem_1 !== null && DelItem_1 !== null && RemoveItem_1 !== null && AddItem_2 !== null && DelItem_2 !== null && RemoveItem_2 !== null && AddItem_3 !== null && DelItem_3 !== null && RemoveItem_3 !== null)
{
    AddItem_1.addEventListener('click', addItem_1);
    DelItem_1.addEventListener('click', deleteItem_1);
    RemoveItem_1.addEventListener('click', removeItem_1);

    AddItem_2.addEventListener('click', addItem_2);
    DelItem_2.addEventListener('click', deleteItem_2);
    RemoveItem_2.addEventListener('click', removeItem_2);

    AddItem_3.addEventListener('click', addItem_3);
    DelItem_3.addEventListener('click', deleteItem_3);
    RemoveItem_3.addEventListener('click', removeItem_3);
}


var element_1 = {
	quantity: 1,
	price: 25,
	sum: 25
};
var element_2 = {	
	quantity: 1,
	price: 35,
	sum: 35
};
var element_3 = {
	quantity: 1,
	price: 15,
	sum: 15
};
//item 1

function addItem_1() {
	event.preventDefault();
	if (element_1.quantity < 10) {
	element_1.quantity += 1;
	element_1.sum = element_1.quantity * element_1.price;
	inputField_1.value = element_1.quantity;
	priceField_1.innerHTML = element_1.sum;
	}
	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();

}

function deleteItem_1() {
	event.preventDefault();

	if (element_1.quantity > 0) {
		element_1.quantity -= 1;
		inputField_1.value = element_1.quantity;
		element_1.sum = element_1.sum - element_1.price;
		priceField_1.innerHTML = element_1.sum;
	}
		total.innerHTML = getTotal();
		subtotal.innerHTML = getSubTotal();

}

function removeItem_1() {
	event.preventDefault();
	item_1.classList.toggle('hide');
	if (item_1.classList.contains('hide')){
	element_1.sum = 0;
	}
	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();

}

//item 2

function addItem_2() {
	event.preventDefault();
	if (element_2.quantity < 10) {
	element_2.quantity += 1;
	element_2.sum = element_2.quantity * element_2.price;
	inputField_2.value = element_2.quantity;
	priceField_2.innerHTML = element_2.sum;
	}
	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();

}

function deleteItem_2() {
	event.preventDefault();

	if (element_2.quantity > 0) {
		element_2.quantity -= 1;
		inputField_2.value = element_2.quantity;
		element_2.sum = element_2.sum - element_2.price;
		priceField_2.innerHTML = element_2.sum;
	}
		total.innerHTML = getTotal();
		subtotal.innerHTML = getSubTotal();

}

function removeItem_2() {
	event.preventDefault();
	item_2.classList.toggle('hide');
	if (item_2.classList.contains('hide')){
	element_2.sum = 0;
  
	}

	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();

}

//item 3

function addItem_3() {
	event.preventDefault();
	if (element_3.quantity < 10) {
	element_3.quantity += 1;
	element_3.sum = element_3.quantity * element_3.price;
	inputField_3.value = element_3.quantity;
	priceField_3.innerHTML = element_3.sum;
	}

	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();
}


function deleteItem_3() {
	event.preventDefault();

	if (element_3.quantity > 0) {
		element_3.quantity -= 1;
		inputField_3.value = element_3.quantity;
		element_3.sum = element_3.sum - element_3.price;
		priceField_3.innerHTML = element_3.sum;

	}
		total.innerHTML = getTotal();
		subtotal.innerHTML = getSubTotal();


}

function removeItem_3() {
	event.preventDefault();
	item_3.classList.toggle('hide');
	if (item_3.classList.contains('hide')){

		element_3.sum = 0;
  
	}

	total.innerHTML = getTotal();
	subtotal.innerHTML = getSubTotal();

}

//total

function getTotal(){
    return element_1.sum + element_2.sum + element_3.sum;
}
function getSubTotal(){
    return element_1.sum + element_2.sum + element_3.sum;
}





var popup = document.getElementById('overlay');
var profileLink = document.getElementById('profile');
var close = document.getElementById('close');

function showPopup() {
	popup.classList.toggle('opened');
	if (mobileMenu.classList.contains('open-menu')){
		mobileMenu.classList.toggle('open-menu');
		activeMenu.classList.toggle('active');
		document.body.classList.toggle('nonScroll');
	}
	document.body.classList.toggle('nonScroll')
}
function closePopup() {
	popup.classList.toggle('opened');
	document.body.classList.toggle('nonScroll')
}
profileLink.addEventListener('click', showPopup);
close.addEventListener('click', closePopup);



var pie = document.getElementById('mobile');
var mobileMenu = document.getElementById('mobile-menu');
var activeMenu = document.querySelector('.mobile-btn');

function showMobileMenu() {
	mobileMenu.classList.toggle('open-menu');
	document.body.classList.toggle('nonScroll');
	activeMenu.classList.toggle('active')
}
pie.addEventListener('click',showMobileMenu);

function initMap() {
var mapId = document.getElementById('map');
var mapCenter = {
	lat: 36.175172, 
	lng: -86.778092
};

var coord = {
	lat: 36.173380,
	lng: -86.787027
};

var map = new google.maps.Map ( 
	mapId,
{
	zoom: 16,
	center: mapCenter,
	fullscreenControl: false
}
);
var infoWindow = new google.maps.InfoWindow({
          content: "1001 5th Avenue North Nashville, TN 37219 USA"
        });

var marker = new google.maps.Marker({
	position: coord,
	map: map,
	icon: "../images/map-marker.png",
    draggable: true,
    animation: google.maps.Animation.DROP
});
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
marker.addListener('click', function () {
	infoWindow.open(map, marker);
});
}
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };
//
//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             map.setCenter(pos);
//         }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
// }


$(".pagination a").click(function() {
    $(".pagination a").removeClass("active");
    $(this).addClass("active");
});

$(".blend").click(function() {
    $(".overlay").fadeToggle();
});
var pos = 0;
//number of slides
var totalSlides = $('slider1').length;
$(document).ready(function(){
    $('.slider1').slick({
        prevArrow: "<span class='slick-prev'></span>",
        nextArrow: "<span class='slick-next'></span>"
    });
    countSlides();
});
function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
}
