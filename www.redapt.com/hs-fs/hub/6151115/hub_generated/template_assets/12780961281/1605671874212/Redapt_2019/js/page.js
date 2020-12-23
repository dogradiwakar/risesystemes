/*
Author: Joe Tan (joetan54@gmail.com)

THIS CODE MAY NOT BE REDISTRIBUTED WITHOUT EXPLICIT PERMISSION
*/

window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();

var tabletBreakpoint = 767;

jQuery.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();
jQuery(function($) {
	if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
		$(document.body).addClass('no-svg');
	} else {
		$(document.body).addClass('svg');
	}

});

if (typeof isIE == 'undefined') isIE = false;
var _gaq = _gaq || [];
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod|iPad/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function setCookie(cookie_name, value, days) {
    var cookie = cookie_name +'='+value+';path=/;';
    
    if (days) {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + days);
        cookie = cookie + 'expires='+exdate.toGMTString();
    }
    
    document.cookie = cookie;
}

// misc formatting
jQuery(function($) {
	$(document.body).removeClass('no-js').addClass('has-js');
	
	$('p:has(a.more)').addClass('hasMore');
	
	$('img[align=right]').addClass('alignright');
	$('img[align=left]').addClass('alignleft');

	$('ul,ol').each(function(j,ul) {
		$(ul).find('> *').each(function(i,li) {
			$(li).addClass('nth-child-'+(i+1)+ ' nth-child-'+((i%2==0) ? 'odd' : 'even'));
		});
		$(ul).find('> *:last').addClass('last');
	});

	$('#content hr').each(function () {
		$(this).wrap('<div class="hr '+$(this).attr('class')+'"></div>');
	});

	// pop open URLs that are now in the allowedDomains list into a new window
	var DOMAINS = DOMAINS || [];
	var hostName = window.location.hostname;
    var allowedDomains = ['redapt.com', 'blog.redapt.com', 'attnix.com', 'www.redapt.com', '6151115.hs-sites.com'];
	allowedDomains.push(hostName);

	var services = [
		'facebook.com/sharer',
		'twitter.com/intent',
		'pinterest.com/pin/create',
		'plus.google.com/share',
		'api.addthis.com',
		'linkedin.com/shareArticle'
	];
	$(document).on('click', 'a.popup,a[href*="'+services.join('"],a[href*="')+'"]', function() {
		var w = $(this).data('width');
		var h = $(this).data('height');
		if (!w) w = 750;
		if (!h) h = 480;
		var w = window.open($(this).attr('href'), '_blank', 'width='+w+',height='+h);
		return false;
	});
	$(document).on('click', 'a', function() {
		var a = $(this);
		var href = a.attr('href');
		if (!href) return;
		if (a.attr('target')) return;
		if (href.indexOf('//') == 0) {
            href = 'http:' + href;
        }
		if (href.indexOf('http') != 0) return;
		
		var domain = href.match(/:\/\/(.[^/]+)/)[1];
		if ($.inArray(domain, allowedDomains) < 0) {
			a.attr('target', '_blank')
		}
	});

	
	//image rollovers
	$('img[hover]').each(function(i,img) {
		var hover = new Image();
		hover.src = $(img).attr('hover');
		var orig_src = $(img).attr('src');
		$(img).hover(function() {
			$(img).attr('src', hover.src);
		}, function() {
			$(img).attr('src', orig_src);
		});
	});
});

// table formatting
jQuery(function($) {
	$('table').each(function(i,table) {
		var headers = [];
		table = $(table);
		var thead = table.find('> thead > tr > td, > thead > tr > th');
		for (var j=0;j<thead.length;j++) {
			headers.push(thead.eq(j).text().replace(/^\s+|\s+$/g, ''));
		}
		table.find('> tbody > tr').each(function(r, row) {
			var cells = $(row).find('> td');
			if (cells.length == headers.length) {
				cells.each(function(t, td) {
					td = $(td);
					if (!td.data('label')) {
						td.attr('data-label', headers[t]);
					}
				});
			}
		}).addClass('table-responsive');
	});
});


jQuery(function($) {
	if (!$.support.placeholder) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
	$('[placeholder]:not(.noclear)').focus(function() {
		if (!$(this).data('placeholder')) {
			$(this).data('placeholder', $(this).attr('placeholder'))
		}
		$(this).attr('placeholder', '');
	}).blur(function() {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	$('[type="email"]').parents('form').submit(function() {
		var pass = true;
		$(this).find('[type="email"]').each(function() {
			if (!is_email($(this).val())) {
				pass = false;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		return pass;
	});
	function is_email(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

});


// drop down menu handlers
jQuery(function($) {
	var win = $(window);
    var container = $('#header > .wrap');
    
	var nav = $('#nav');
    var items = [];
    var navToggle = $('#nav-toggle');
    
    var closeTimer = null;
    
    // setup menus
    nav.find('>ul>li:has(>ul)').each(function(i) {
        var hoverMenu = $('<div class="hover-menu" id="menu-'+i+'"></div>');
        var ul = $(this).find('>ul').clone();
        //ul.prepend('<li class="name">'+$(this).find('>a').text()+'</li>');
        if (ul.find('>li').length > 4) {
            ul.addClass('multirow');
        }
        hoverMenu.append(ul);
        container.append(hoverMenu);
        //var ul = $(this).find('>ul').prepend('<li class="overview"><a href="'+$(this).find('>a').attr('href')+'">'+$(this).find('>a').text()+' Home</a></li>');
        $(this).data('menu', hoverMenu)
        items.push(this);
    });
    
    var menus = $('#header .hover-menu');
    
    $('#header .hover-menu').on('mouseover', function() {
        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }
    }).on('mouseout', function(e) {
        if (closeTimer) {
            clearTimeout(closeTimer);
        }
        closeMenus();
    })/*
    .find('>ul>li').each(function(i) {
        var li = $(this);
        if (li.find('>ul').length > 0) {
            li.on('mouseover', function() {
                $(this).addClass('hover').siblings().removeClass('hover');
            });
        } else {
            li.on('mouseover', function() {
                $(this).siblings().removeClass('hover');
            });
        }
    })
    */
    
    $(items).each(function() {
        var self = $(this);
        var target = self.data('menu');
        self.find('> a')
            .on('touch click', function() {
                if (navToggle.is(':visible')) {
                    self.toggleClass('on');
                    return false;
                }
            }).hover(function() {
                if (navToggle.is(':visible')) {
                    return;
                }
                
                self.addClass('hover').siblings().removeClass('hover');
                target.addClass('on').siblings().removeClass('on');
                if (closeTimer) {
                    clearTimeout(closeTimer);
                }
            }, function() { });
        /*
        self.find('> a')
            .on('touchstart', function() {
                $(this).one('click', function() {
                    return false;
                });
                target.addClass('on').siblings().removeClass('on');
            }).hover(function() {
                self.addClass('hover').siblings().removeClass('hover');
                target.addClass('on').siblings().removeClass('on');
                if (closeTimer) {
                    clearTimeout(closeTimer);
                }
            }, function() { });
        */
        
    });
    
    function closeMenus() {
        if (closeTimer) {
            clearTimeout(closeTimer);
        }
        closeTimer = setTimeout(function() {
            menus.removeClass('on');
            nav.find('li.hover').removeClass('hover');
        }, 400);
    }
    /*
	nav.find('li').hoverIntent({
		sensitivity: 1, 
		interval:50,
		timeout: 500,
		over:function() {
            if (win.width() <= tabletBreakpoint) return;
            
			var m = $(this);
			var ul = m.find('> ul');
			if (ul.length > 0) {
				m.addClass('hover');
				ul.slideDown(100).addClass('opened');
				m.siblings().removeClass('hover').find('ul').hide().removeClass('opened');
			}
		},
		out:function() {
			if (win.width() <= tabletBreakpoint) return;
			$(this).removeClass('hover').find('ul').hide().removeClass('opened');
		}
	}).each(function(i, li) {
		if ($(li).find('> ul').length > 0) {
			$(li).addClass('has-submenu');
		}
	})
	.end().addClass('initialized');
    
    nav.find('li').bind('click touch', function() {
        var m = $(this);
        var ul = m.find('> ul');
        if (ul.length > 0) {
            m.toggleClass('hover');
            if (m.hasClass('hover')) {
                ul.addClass('opened').slideDown(100);
                m.siblings().removeClass('hover').find('ul').hide().removeClass('opened');
                return false;
            } else {
                ul.removeClass('opened').hide();
            }
        }
    });
    */
    
});

// expandable sections
jQuery(function($) {
/*
	var more = $('<li class="show-more">...See More</li>');
	more.click(function() {
		$(this).hide('fast').siblings().slideDown('fast');
	});
	$('#sidebar .expandable').each(function(i, obj) {
		$(obj).click(function() {
			$(this).toggleClass('opened')
			$(this).next('ul').slideToggle()
			if ($(this).hasClass('opened')) {
				$(this).find('span.status').text('[-]')
			} else {
				$(this).find('span.status').text('[+]')
			}
			return false;
		});
		var list = $(obj).next('ul');
		if ($(obj).hasClass('opened') || list.find('li.selected, li.current-cat').length > 0) {
			$(obj).append(' <span class="status">[-]</span>')
			$(obj).addClass('opened')
		} else {
			$(obj).append(' <span class="status">[+]</span>')
			list.hide();
		}
		var listAll = $(obj).hasClass('list-all');
		if (!listAll) {
			var elems = list.find('> li')
			if (elems.length > 10 && elems.filter(':not(.current-cat)').length <= 0) {
				elems.eq(8).nextAll().hide();
				list.append(more.clone(true));
			}
		}

	});

	$('dl.expandable dt').click(function() {
		$(this).next('dd').slideToggle();
		return false;
	});
*/
	$('#main .expandable').each(function(i, hdr) {
		var tagName = $(this).prop('tagName').toUpperCase();
		if (tagName == 'H5') {
			tagName = 'H5,H4,H3,H2,H1'
		} else if (tagName == 'H4') {
			tagName = 'H4,H3,H2,H1'
		} else if (tagName == 'H3') {
			tagName = 'H3,H2,H1'
		} else if (tagName == 'H2') {
			tagName = 'H2,H1'
		}

		$(this).nextUntil('.expandable,hr,.hr,'+tagName).wrapAll('<div class="expand-content"></div>');
		var expand = $(this).next('.expand-content');
		$(this).click(function() {
			$(this).toggleClass('opened');
			if ($(this).hasClass('opened')) {
				expand.slideDown('fast');
			} else {
				expand.slideUp('fast');
			}
		}).append('<span class="i"></span>');
		if ($(this).hasClass('opened')) {
			expand.show();
		}
	});
});

// expandable boxes
jQuery(function($) {
    var boxes = $('.expandable-box');
    if (boxes.length <= 0) return;

    boxes.each(function() {
        var box = $(this);
        $('<span class="more">Read more</span>').click(function() {
            box.toggleClass('on');
            if (box.hasClass('on')) {
                $(this).text('Less');
            } else {
                $(this).text('Read more')
            }
        }).appendTo(box);
    });
});


// print preview
jQuery(function($) {
	var links = $('link[rel=stylesheet]');
	var print = links.filter('link[media=print]')
	var screen = links.filter('link:not([media=print])')
	$('a.print').click(function() {
		create_preview();
		return false;
	});
	function create_preview() {
		$(print).each(function(i, stylesheet) {
			$(stylesheet).attr('media', 'all')
		});
		$(screen).each(function(i, stylesheet) {
			$(stylesheet).attr('disabled', 'disabled')
		});
		var done = $('<input type="button" value="Done" />');
		done.click(function() {
			close_preview();
		});
		var preview = $('<form id="print-preview" style="margin: 0 0 2em 0; padding:0.75em; border-bottom:1px solid #555;background:#ccc;"><strong>Print Preview</strong> &nbsp; &nbsp; <input type="button" value="Print this Page" onclick="window.print()" /> &nbsp; &nbsp; <style media="print">#print-preview { display:none} </style></form>');
		preview.append(done).prependTo('body');
		
		setTimeout(function() { window.print(); }, 1000);
		
	}
	
	function close_preview() {
		$(print).each(function(i, stylesheet) {
			$(stylesheet).attr('media', 'print')
		});
		$(screen).each(function(i, stylesheet) {
			$(stylesheet).attr('disabled', false)
		});
		$('#print-preview').remove();
	}
});


jQuery(function($) {
	var body = $(document.body);
	$(document).on('click', '.clickable', function(e) {
        if (e.target.tagName.toUpperCase() == 'A') {
            return;
        }
		var href = $(this).data('href');
		if (!href) {
			href = $(this).find('a').attr('href');
		}
        href = href + '';
        
		if (href) {
            if (href.match(/:\/\/(.[^/]+)/)) {
                var DOMAINS = DOMAINS || [];
                var hostName = window.location.hostname;
                var allowedDomains = DOMAINS || [];
                allowedDomains.push(hostName);

                var domain = href.match(/:\/\/(.[^/]+)/)[1];
                if ($.inArray(domain, allowedDomains) < 0) {
                    window.open(href, '_blank');
                } else {
                    window.location = href;
                }
            }
            
			window.location = href;
		}
	});
	$('.toggle').click(function(e) {
		var toggleClass = $(this).data('toggle-class');
		body.toggleClass(toggleClass);
		if (body.hasClass(toggleClass)) {
            $(this).addClass('on');
            $(this).siblings('.toggle').each(function() {
                $(this).removeClass('on');
                body.removeClass($(this).data('toggle-class'));
            });
        } else {
            $(this).removeClass('on');
        }
        body.trigger('toggle-class:'+toggleClass);
        
        
		return false;
	});
	body.removeClass('no-js');
});

// sticky
jQuery(function($) {
    var sticky = $('.sticky');
    if (sticky.length <= 0) return;
    
    var body = $(document.body);
    var win = $(window);
    var refreshTimer = false;
    
    function refreshStickyPositions(no_update) {
        
        sticky.removeClass('init bottom fixed').each(function() {
            var me = $(this);
            me.data('objTop', me.offset().top);
            var parent = me.parent();
            me.data('objBottom', parent.offset().top + parent.outerHeight() - me.outerHeight());
            
        });
        if (no_update) return;
        
        if (refreshTimer) {
            clearTimeout(refreshTimer);
            refreshTimer = false;
        }
        updateStickyPositions();
    }
    function updateStickyPositions() {
        var scrollTop = window.scrollY || win.scrollTop();
        sticky.each(function() {
            var me = $(this);
            position(me, scrollTop);
            
        });
    }
    win.load(function() {
        refreshStickyPositions();
    }).bind('resize', function() {
        if (refreshTimer) {
            clearTimeout(refreshTimer);
            refreshTimer = false;
        }
        refreshTimer = setTimeout(function() {
            refreshStickyPositions();
        }, 50);
        
    });
    
    win.scroll(function() {
        updateStickyPositions();
        /*
        if (refreshTimer) {
            clearTimeout(refreshTimer);
        }
        refreshTimer = setTimeout(function() {
            refreshStickyPositions(true);
        }, 100);
        */
    });
    win.scroll();
    
    function position(obj, scrollTop) {
        var offset = parseInt(obj.data('offset-top'));
        if (!offset || isNaN(offset)) offset = 100;
        if (scrollTop >= (obj.data('objBottom') - offset)) {
            if (!obj.hasClass('bottom')) {
                obj.addClass('bottom');
            
            }
        } else {
            if (obj.hasClass('bottom')) {
                obj.removeClass('bottom');
            }
            
            if (scrollTop >= (obj.data('objTop') - offset)) {
                if (!obj.hasClass('fixed')) {
                    obj.addClass('fixed');
                    obj.data('top', obj.position().top)
                }

            } else {
                if (obj.hasClass('fixed')) {
                    obj.removeClass('fixed');
                }

            }
        }
    }
});


// subscribe to window messages
jQuery(function($) {
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
        
		if (e.data.action) {
			if (e.data.action == 'setIFrameHeight') {
				$('iframe').css({minHeight:e.data.value});
			} else if (e.data.action == 'scroll-to-top') {
				$("html, body").animate({ scrollTop: "0px" });
			}
		} else {
            console.log('Received message', e);
		}
	},false);

	//if (window.parent) {
	//	window.parent.postMessage({action:'setIFrameHeight', value:$(document.body).height()}, '*');
	//}

});





// fit text
jQuery(function($) {
    var texts = $('.fit-text');
    if (texts.length <= 0) return;
    update();
    var rTimer = null;
    $(window).resize(function() {
        if (rTimer) {
            clearTimeout(rTimer);
        }
        rTimer = setTimeout(function() {
            update();
        }, 10)
    });
    
    function update() {
        texts.each(function() {
            var text = $(this);
            var container =  text.data('container') ? text.closest(text.data('container')) : text.parent();
            var contentWidth = container.width();
            var i = 0;
            text.attr('style', '');
            if (text.width() > contentWidth) {
                text.addClass('resizing');
                var fontSize = parseInt(text.css('fontSize'));
                while ((text.width() > contentWidth) && (fontSize > 16) && (i++ < 100)) {
                    fontSize = fontSize - 1;
                    text.css({fontSize:fontSize+'px'})
                }
                text.removeClass('resizing');
            }
        });
    }
});


// overlays
jQuery(function($) {
    var overlay = $('#overlay');
    var overlayContent = overlay.find('.content');
    var delay = 500;


    var mask = $('#overlay-mask');
    var body = $(document.body);
    body.on('overlay:load', function(e) {
        body.addClass('mask-on overlay-init overlay-loading');
        mask.addClass('on');
    });

    body.on('overlay:show', function(e, html) {
        overlayContent.html(html);
        var p = overlayContent.position();
        var winHeight = $(window).height();
        overlayContent.css({height: winHeight - p.top});
        overlay.css({height:winHeight});
        body.removeClass('overlay-loading').addClass('overlay-on overlay-init');



        $.when(overlay.fadeIn(delay)).then(function() {


            overlay.addClass('on');
        });

    });
    body.on('overlay:hide', function(e) {
        body.removeClass('mask-on overlay-on overlay-loading');
        mask.removeClass('on');
        $.when(overlay.fadeOut(delay)).then(function() {
            overlayContent.html('').css({height:'auto'}).attr('style', '');
            overlay.attr('class', '').attr('style', '');
            body.removeClass('overlay-init');
        });
    });

    overlay.find('.close').click(function() {
        body.trigger('overlay:hide');
        return false;
    });
    mask.click(function() {
        body.trigger('overlay:hide');
    });
    $(document).on('keypress keydown', function(e) {
        if (e.which == 27) {
            body.trigger('overlay:hide');
        }
    });
});


// popup embed
jQuery(function($) {
    var popups = $('.play');
    if (popups.length <= 0) return;
    var body = $(document.body);

    popups.click(function() {
        var src = $(this).data('embed-src');
        
        if (src) {
            body.trigger('overlay:load');

            var html = '<div class="embed">';
            if (src.match(/mp4$/)) {
                html = html + '<video width="100%" height="100%" controls autoplay><source src="' + src + '" type="video/mp4" /></video>';
            } else {
                html = html + '<iframe src="'+src+'" allow="autoplay" ></iframe>';    
            }
            html = html + '</div>';



            body.trigger('overlay:show', html);
        } else {
            window.open($(this).attr('href'), '_blank')
        }
        return false;
    });
});

// scrolled a bit
jQuery(function($) {
    var win = $(window);
    var body = $(document.body);
    win.scroll(function() {
        update();
    });
    update();
    
    function update() {
        var scrollTop = window.scrollY || win.scrollTop();
        if (scrollTop > 100) {
            if (!body.hasClass('scrolled')) body.addClass('scrolled').trigger('scrolled:on');
        } else {
            if (body.hasClass('scrolled')) body.removeClass('scrolled').trigger('scrolled:off');
        }
    }
});

// scroll handler
jQuery(function($) {
    var sections = $([
        '.appear', 
        //'.count-up',
        //'.posts',
        '.section:not(.no-appear)',
        '.step-visible:not(.manual)'
    ].join(','));
    var winH = $(window).height();
    var offsetH = winH * 0.05;
    $(window).on('scroll resize scroll:setup', function() {
        var scrollTop = window.scrollY || $(window).scrollTop();
        
        sections.each(function() {
            var section = $(this);
            var position = section.offset();
            if ((scrollTop + winH) > (position.top + offsetH)) {
                if (!section.data('visible')) {
                    section.data('visible', true);
                    setTimeout(function() {
                        section.addClass('visible').trigger('visible');
                    }, 10);
                }
            }
        });
        
        
    });
    
    setTimeout(function() {
        $(window).trigger('scroll:setup');
    }, 200);
    
});

jQuery(function($) {
    var hero = $('#hero');
    if (hero.length <= 0) return;
    
    if (hero.find('.slides > *').length <= 1) {
        hero.find('.slides').wrapInner('<div class="slick-list"></div>');
        return;
    }
    
    
    hero.find('.slides').slick({
        slidesToScroll:1,
        arrows:false,
        dots:true,
        asNavFor:'.bgs',
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false
    })
    hero.find('.bgs').slick({
        slidesToScroll:1,
        arrows:false,
        dots:false
    });
    
    $(document.body).on('scrolled:on', function() {
        hero.find('.slides').slick('slickPause')
    }).on('scrolled:off', function() {
        hero.find('.slides').slick('slickPlay')
    })
});

jQuery(function($) {
    var block = $('.theme-block.carousel-resources, .theme-block.carousel-quotes');
    if (block.length <= 0) return;
    
    if (block.find('.slides > *').length <= 1) {
        block.find('.slides').wrapInner('<div class="slick-list"></div>');
        return;
    }
    
    
    block.find('.slides').slick({
        slidesToScroll:1,
        arrows:false,
        dots:true,
        adaptiveHeight:true,
    })
    
});



// tabbed content
jQuery(function($) {
    var blocks = $('.tabs');
    if (blocks.length <= 0) return;
    blocks.each(function() {
        var block = $(this);
        block.find('a').on('click', function() {
            var target = $($(this).attr('href')+'-tab');
            if (target.length <= 0) return;
            
            target.addClass('selected').show().siblings('.tab-content').hide().removeClass('selected');
            $(this).closest('li').addClass('selected').siblings().removeClass('selected');
            $('a.mobile-only.tab[href="'+$(this).attr('href')+'"]').addClass('selected').siblings('.tab').removeClass('selected');
            
            $($(this).attr('href')+'-bg').addClass('on').siblings('.bg').removeClass('on');
            return false;
        }).each(function() {
            var target = $($(this).attr('href')+'-tab');
            if (target.length <= 0) return;
            var mobileTab = $('<a href="'+$(this).attr('href')+'" class="mobile-only tab">'+$(this).html()+'</a>');
            target.before(mobileTab);
            mobileTab.on('click', function() {
                $(this).addClass('selected').siblings('.tab').removeClass('selected');
                target.addClass('selected').show().siblings('.tab-content').hide().removeClass('selected');
                return false;
            })
            
        });
        
        
        block.find('a').eq(0).trigger('click');
        
            
            
        
        
        
            
    });
    update();
    var t = null;
    $(window).on('load resize', function() {
        if (t) {
            clearTimeout(t);
        }
        t = setTimeout(function() {
            update();
        }, 100);
        
    })
    function update() {
        $('.tab-content-wrap').each(function() {
            var maxH = 0;
            $(this).find('.tab-content').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH) {
                    maxH = h;
                }
            });
            $(this).find('.tab-content').css({minHeight:maxH});
        });
    }
});


// anchor links
jQuery(function($) {
    var links = $('a[href^="#"]').on('click', function() {
        var target = $($(this).attr('href'));
        if (target.length > 0) {
            var top = target.offset().top;
            $('html,body').animate({scrollTop:top - 107}, {duration:1000});
            return false;
        }
    })
});

// posts filter
jQuery(function($) {
    var block = $('.posts-filter');
    if (block.length <= 0) return;
    
    block.find('.filter .label').each(function() {
        var label = $(this);
        label.data('default-text', label.text());
        var filter = $(this).closest('.filter');
        label.on('click', function() {
            filter.toggleClass('on');
            filter.siblings().removeClass('on');
        });
    });
    block.find('.filter').on('change', function(e, val) {
        $(this).find('li .a:contains('+val+')').trigger('click');
    });
    $(document).on('click', '.posts-filter .filter .a', function() {
        var self = $(this);
        var filter = self.closest('.filter');
        var label = filter.find('.label');
        
        if (self.closest('li').hasClass('show-all')) {
            label.text(label.data('default-text'));
            filter.trigger('select', null)
        } else {
            label.text(self.text());
            filter.trigger('select', self.text())
        }
        
        
        filter.removeClass('on');
        
        
        return false;
    });
    
});


// specific jobs
jQuery(function($) {
    var jobs = $('.hentry.job[data-id]');
    if (jobs.length <= 0) return;
    $.ajax({
        url: 'https://boards-api.greenhouse.io/v1/boards/redapt/jobs',
        jsonp:'callback',
        dataType:'jsonp',
        data:{content:true},
        success:function(response) {
            if (response.error) {
                console.error("Error loading jobs", response.error);
                self.remove();
                return;
            }
            var data = response.jobs;
            data.sort(function(a, b) {
                if (a.updated_at > b.updated_at) return 1;
                if (b.updated_at > a.updated_at) return -1;
                return 0;
            });
            $(jobs).each(function(i) {
                var self = $(this);
                self.removeClass('loading');
                make_job(self, data[i]);
            })
        }
    });
    /*
    $(jobs).each(function(i) {
        var self = $(this);
        var id = self.data('id');
        if (!id) return;
        self.addClass('loading');
        $.ajax({
            url:'https://boards-api.greenhouse.io/v1/boards/redapt/jobs/'+id,
            jsonp:'callback',
            dataType:'jsonp',
            data:{},
            success:function(response) {
                self.removeClass('loading');
                
                if (response.error) {
                    console.error("Error loading job: "+id, response.error);
                    self.remove();
                    return;
                }
                
                
                make_job(self, response);
            }
        })
    });
    */

    function make_job(div, job) {
        
        var url = '/careers/openings/view?gh_jid='+job.id;
        var content = $(decodeEntities(job.content));
        div
            .append('<h3 class="title"><a href="'+url+'">'+job.title+'</a></h3>')
            .append('<div class="location">'+job_get_location(job)+'</div>')
            .append('<div class="content">'+content.text().substring(0, 250)+'&hellip;</div>')
            .append('<p class="cta"><a href="'+url+'">Learn more</a></p>')
    }
    
    function decodeEntities(encodedString) {
         var textArea = document.createElement('textarea');
          textArea.innerHTML = encodedString;
          return textArea.value;
    }
});

// all jobs
jQuery(function($) {
    var jobsList = $('#the-jobs-list');
    if (jobsList.length <= 0) return;
    
    var jobsFilter = $('.jobs-filter');
    
    var all_jobs = [];
    var filter = {
        location:getURLParameter('location'),
        department:getURLParameter('department'),
    }
    
    var locations = [];
    var departments = [];
    
    var locationsContainer = $('#jobs-location');
    var departmentsContainer = $('#jobs-department');
    
    var searchBlock = $('.theme-block.search.jobs');
    if (searchBlock.length > 0) {
        searchBlock.on('submit', function() {
            filter.query = $(this).find('input.input').val().toLowerCase();
            refresh_jobs();
            var p = $('#the-jobs-list').offset();
            $('html,body').animate({scrollTop:p.top - 100}, {duration:1000});
            return false;
        });
    }
    
    
    jobsList.addClass('loading');
    
    var status = $('.theme-block.jobs .status');
    status.text('Loading positions...');
    $.ajax({
        url: 'https://boards-api.greenhouse.io/v1/boards/redapt/jobs',
        jsonp:'callback',
        dataType:'jsonp',
        data:{content:true},
        success:function(response) {
            jobsList.removeClass('loading');
            
            if (response.error) {
                console.error("Error loading jobs", response.error);
                self.remove();
                return;
            }
            all_jobs = response.jobs;
            
            
            refresh_jobs();
            locations.sort(function(a, b) {
                var a_split = a.split(', ')
                var a_city  = a_split[0];
                var a_state = a_split[1];
                
                var b_split = b.split(', ')
                var b_city  = b_split[0];
                var b_state = b_split[1];
                
               
                
                if (a_state < b_state) {
                    return -1;
                } else if (a_state > b_state) {
                    return 1;
                } else if (a_city < b_city) {
                    return -1;
                } else if (a_city > b_city) {
                    return 1;
                } else {
                    return 0;
                }
            });
            
            $(locations).each(function() {
                var label = this;
                locationsContainer.append('<li><span class="a">'+label+'</span></li>');
            });
            $(departments).each(function() {
                var label = this;
                departmentsContainer.append('<li><span class="a">'+label+'</span></li>');
            });
            
        }
    });
    $('.posts-filter .filter').on('select', function(e, what) {
        var field = $(this).data('field');
        
        filter[field] = what;
        
        //jobsContainer.html('').addClass('loading');
        refresh_jobs();
    });
    
    function refresh_jobs() {
        var found = 0;
        jobsList.html('');
        
        
        $(all_jobs).each(function() {
            var job = this;
            var loc = job_get_location(job);
            
            if ($.inArray(loc, locations) < 0) {
                locations.push(loc);
            }
            
            if (job.departments && ($.inArray(job.departments[0].name, departments) < 0)) {
                departments.push(job.departments[0].name);
            }
            
            var pass = true;
            if (filter.location) {
                if (filter.location != loc) {
                    pass = false;
                }
            }
            if (filter.department) {
                if (filter.department != job.departments[0].name) {
                    pass = false;
                }
            }
            if (filter.query) {
                var test = filter.query;
                var search = (job.title + job.location.name + job.departments[0].name).toLowerCase();
                
                if (search.indexOf(test) < 0) {
                    pass = false;
                }
            }
            
            if (pass) {
                jobsList.append(make_job(job));
                found++;
            }
        });
        
        status.text('Displaying '+ found+ ' position' + (found != 1 ? 's' : ''));
    }
    function make_job(job) {
        var url = '/careers/openings/view?gh_jid='+job.id;
        
        return $('<li>'+
            ((job.departments && job.departments[0].name) ? ('<div class="subtitle">'+job.departments[0].name+'</div>') : '')+
            '<h3 class="title"><a href="'+url+'">'+job.title+'</a></h3>'+
            '<div class="location">'+job_get_location(job)+'</div>'+
            '<div class="action"><a href="'+url+'">Learn More <span class="icon fa fa-angle-right"></span></a></div>'+
        '</li>')
    }
    
    
    
});

jQuery(function($) {
    var job_id = getURLParameter('gh_jid');
    if (!job_id) return;
    
    $.ajax({
        url:'https://boards-api.greenhouse.io/v1/boards/redapt/jobs/'+job_id,
        jsonp:'callback',
        dataType:'jsonp',
        data:{},
        success:function(response) {
            if (response.error) {
                console.error("Error loading job: "+id, response.error);
                return;
            }

            $('.job-title').text(response.title);
            $('.job-location').text(job_get_location(response));
            if (response.departments) $('.job-department').text(response.departments[0].name);
            
        }
    })
});

function job_get_location(job) {
    var loc = job.location.name;
    if ($.inArray(loc, ['Bellevue', 'Woodinville']) >= 0) {
        loc += ', WA';
    } else if ($.inArray(loc, ['Las Vegas']) >= 0) {
        loc += ', NV';
    } else if ($.inArray(loc, ['Atlanta']) >= 0) {
        loc += ', GA';
    } else if ($.inArray(loc, ['Portland']) >= 0) {
        loc += ', OR';
    } else if ($.inArray(loc, ['Dallas']) >= 0) {
        loc += ', TX';
    } else if ($.inArray(loc, ['New York']) >= 0) {
        loc += ', NY';
    } else if ($.inArray(loc, ['San Jose', 'Los Angeles']) >= 0) {
        loc += ', CA';
    } else if ($.inArray(loc, ['Boston']) >= 0) {
        loc += ', MA';
    } else if ($.inArray(loc, ['Phoenix']) >= 0) {
        loc += ', AZ';
    } else if ($.inArray(loc, ['Chicago']) >= 0) {
        loc += ', IL';
    } else if ($.inArray(loc, ['Denver']) >= 0) {
        loc += ', CO';
    } else if ($.inArray(loc, ['Cincinnati']) >= 0) {
        loc += ', OH';
    } else if ($.inArray(loc, ['Washington D.C.']) >= 0) {
        loc = 'Washington, D.C.'
    }

    return loc;
}

// toggle sections
jQuery(function($) {
    var container = $('#role-container');
    if (container.length <= 0) return;
    var list = $('.section-selector ul');
    
    var sections = container.find('.theme-block');
    sections.each(function() {
        var section = $(this);
        var label = $(this).find('h2,h3,h4').eq(0).text();
        $('<li>'+label+'</li>').on('click', function() {
            var p = section.offset();
            sections.not(section).addClass('hidden').hide();
            section.removeClass('hidden').show();
        }).appendTo(list);
        
    });
    sections.hide();
    sections.eq(0).show();
    
    $('.section-selector .select').on('click', function() {
        $(this).toggleClass('on');
    });
    container.addClass('initialized');
});

// copy url
jQuery(function($) {
    var links = $('a.copy-link');
    links.each(function() {
        var self = $(this);
        self.on('click', function() {
            var url = self.get(0).href;
            const el = document.createElement('textarea');
            el.value = url;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            self.addClass('copied');
            return false;
        });

    })
})

// fix cta with images
jQuery(function($) {

    setTimeout(function() {
        update();
    }, 500);
    setTimeout(function() {
        update();
    }, 200);
    setTimeout(function() {
        update();
    }, 1000);
    setTimeout(function() {
        update();
    }, 4000);
    update();
    function update() {
        $('.hs-cta-wrapper .hs-cta-img').each(function() {
            $(this).closest('a').addClass('has-image');
        });
    }
});

// tweetable
jQuery(function($) {
    var blocks = $('.block-tweetable');
    if (blocks.length <= 0) return;
    
    blocks.each(function() {
        var txt = $(this).find('.txt').text();
        var url = 'https://twitter.com/intent/tweet?url='+window.location.href+'&via=redapt&text='+encodeURI(txt);
        $(this).find('.tweet').attr('href', url);
    })
});