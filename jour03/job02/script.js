function melange() {
    let images = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];
    images.sort(() => Math.random() - 0.5);

        $("#img1, #img2, #img3, #img4, #img5, #img6")
            .each(function(index) {
                $(this).attr("src", images[index]);
            });
}

$("#melanger").on("click", function(){
    melange();
});

function danslordre() {
    if (si trié dans l'odre) {
        $("resultat").text(" <b>Vous avez gagner</b>.");
    } else {
        $("resultat").text(" <b>Vous avez perdu</b>.");
    }
}