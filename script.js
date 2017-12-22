$( document ).ready( function () {

    $( 'img' ).click( function () {

        var _this = $(  this );
        var current = _this.attr( 'src' );
        var swap = _this.attr( 'altsrc' );
        _this.attr( 'src', swap ).attr( 'altsrc', current );
        
        console.log ( 'current ' + current + ' swap ' + swap );
        console.log ( $( this ).attr( 'src' ) );
    })
    
    $( '#reload' ).click( function () {
        location.reload ();
    })
    
})
