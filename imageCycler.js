$(document).ready(function() {
    let slidenum = 0;
    
    function cycle() {
        slidenum = slidenum + 1;
        if (slidenum == slides.length) 
            slidenum = 0;
            
        let slide_image = $('#slide_image');
        let slide_text = $('#slide_text');
        let slide_link = $('#slide_link');
        
        slide_image.attr('src', slides[slidenum].src);
        slide_text.html(slides[slidenum].caption);
        slide_link.attr('href', slides[slidenum].url);
        
        if (slides[slidenum].url.length > 0) {
            slide_image.css('cursor', 'pointer');
            slide_image.on('click', function() {
                window.location.href = slides[slidenum].url;
            });
        }
        
        setTimeout(cycle, 3000);
    }
    cycle();
});
