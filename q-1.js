$(document).ready(function() {
    $("#results").click(function() {
        if (!$("input[name='q1']:checked").val() ||
            !$("input[name='q2']:checked").val() ||
            !$("input[name='q3']:checked").val() ||
            !$("input[name='q4']:checked").val() ||
            !$("input[name='q5']:checked").val() ||
            !$("input[name='q6']:checked").val() ||
            !$("input[name='q7']:checked").val() ||
            !$("input[name='q8']:checked").val() ||
            !$("input[name='q9']:checked").val()) {
            alert("Vous n'avez pas encore terminé!");
        } else {
            var catNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var correctAnswers = 0;

            var catChecks = [
                $("input[name='q1']:checked").val() === "b",
                $("input[name='q2']:checked").val() === "c",
                $("input[name='q3']:checked").val() === "d",
                $("input[name='q4']:checked").val() === "d",
                $("input[name='q5']:checked").val() === "a",
                $("input[name='q6']:checked").val() === "c",
                $("input[name='q7']:checked").val() === "c",
                $("input[name='q8']:checked").val() === "b",
                $("input[name='q9']:checked").val() === "a"
            ];

            for (var i = 0; i < catNames.length; i++) {
                if (catChecks[i]) {
                    $("#category" + catNames[i]).css("color", "green").show("slow");
                    correctAnswers++;
                } else {
                    $("#category" + catNames[i]).css("color", "red").show("slow");
                }
            }

            var score = (correctAnswers / catNames.length) * 20;
            alert("Votre note est de : " + score.toFixed(2) + "/20");

            $("#closing").show("slow");
        }
    });
});
