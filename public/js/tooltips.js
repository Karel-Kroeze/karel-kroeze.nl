function doTooltips( content ) {
    $(content).find("a").tooltipster({
       theme: "tooltipster-borderless",
       plugins: ["follower"]
    });
}

let currentContent = "";

function toggleContent( contentID, button ){
    // clear current content
    $("#content").empty();

    // if we're already on this page, toggle to default
    if (currentContent === contentID)
        contentID = "welcome"
        
    // do the switcheroo
    let content = $(`#${contentID}`).clone();
    content.appendTo($("#content"));

    // bookkeeping
    currentContent = contentID;

    // append selector to button
    if ( button && contentID !== "welcome" )
        $("#selector").appendTo( $( button ).find( "li" ) );
    else
        $("#selector").appendTo( $( ".container" ) );
    
    // make tooltips happen
    doTooltips( content );
}

toggleContent('welcome');
doTooltips(".mainbuttons")